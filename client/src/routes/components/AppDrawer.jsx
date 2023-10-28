import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight, ExpandMore, LocalMovies, PeopleAlt, Tv } from "@mui/icons-material";
import { Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import style from "./AppDrawer.module.css";

const menuItems = [
    {
        name: "Movies",
        icon: <LocalMovies className={style.Icon} />,
        subMenuItems: [
            { name: "Popular", path: "/movies/popular" },
            { name: "Now Playing", path: "/movies/now-playing" },
            { name: "Upcoming", path: "/movies/upcoming" },
            { name: "Top Rated", path: "/movies/top-rated" }
        ]
    },
    {
        name: "TV Shows",
        icon: <Tv className={style.Icon} />,
        subMenuItems: [
            { name: "Popular", path: "/tv-shows/popular" },
            { name: "Airing Today", path: "/tv-shows/airing-today" },
            { name: "On TV", path: "/tv-shows/on-tv" },
            { name: "Top Rated", path: "/tv-shows/top-rated" }
        ]
    },
    {
        name: "Celebrities",
        icon: <PeopleAlt className={style.Icon} />,
        subMenuItems: [
            { name: "Popular", path: "/celebs/popular" }
        ]
    },
];

const Menu = ({ onItemSelected }) => {
    const isOpenAtIndex = useRef(Array.from({ length: menuItems.length }, () => false));
    const [selectedIndex, setSelectedIndex] = useState({ value: -1 });     // -1 means nothing is selected

    if (selectedIndex.value !== -1) {
        isOpenAtIndex.current[selectedIndex.value] = !isOpenAtIndex.current[selectedIndex.value];
    }

    return (
        <List component="ul">
            {menuItems.map((item, idx) =>
                <ListItem key={idx} component="li" className={style.ListItem}>
                    <ListItemButton
                        component="button"
                        className={style.ListItemButton}
                        selected={isOpenAtIndex.current[idx]}
                        onClick={() => setSelectedIndex({ value: idx })}
                    >
                        <ListItemIcon className={style.ListItemIcon}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                        {
                            isOpenAtIndex.current[idx]
                                ?   <ExpandMore className={style.Icon} />
                                :   <ChevronRight className={style.Icon} />
                        }
                    </ListItemButton>
                    <Collapse
                        in={item.subMenuItems?.length !== 0 && isOpenAtIndex.current[idx]}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="ul">
                            {item.subMenuItems.map(subItem =>
                                <ListItem key={subItem.name} component="li" className={style.ListItem}>
                                    <ListItemButton
                                        className={style.SubListItemButton}
                                        component={RouterLink}
                                        to={subItem.path}
                                        disableRipple
                                        onClick={() => onItemSelected()}
                                    >
                                        <ListItemText secondary={subItem.name} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </ListItem>
            )}
        </List>
    );
};

export default function AppDrawer(props) {

    return (
        <Drawer {...props} className={style.Drawer} >
            <Menu onItemSelected={props.onClose} />
        </Drawer>
    );
};
