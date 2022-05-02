// NEXT
import Link from 'next/link';

// REACT
import React from 'react';

// TYPES
type props = {
    title: string;
    children?: React.ReactNode;
};

// COMPONENTS
import Layout from 'components/Layout';

// MATERIAL UI
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectRounded from '@mui/icons-material/SubjectRounded';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// INTERFACES
interface MenuItem {
    text: string;
    icon: React.ReactElement;
    path: string;
}

// CONSTANTS
const drawerWidth: number = 240;

// STYLES
const styles = {
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    page: {
        width: '100%',
        paddingTop: '5.5rem'
    },
    root: {
        display: 'flex'
    },
    title: {
        margin: 4
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: {}
};

const App: React.FC<props> = ({ title, children }) => {
    const menuItems: MenuItem[] = [
        { text: 'My Notes', icon: <SubjectRounded />, path: '/app/schedule' },
        { text: 'Create Note', icon: <AddCircleOutlineRounded />, path: '/' }
    ];
    return (
        <Layout title={title} background="#f9f9f9" style={styles.root}>
            <AppBar sx={styles.appbar} elevation={0}>
                <Toolbar>
                    <Typography variant="subtitle1" color="textSecondary">
                        Welcome to the Strive homepage
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={styles.drawer}
                variant="permanent"
                anchor="left"
                PaperProps={{ sx: { width: drawerWidth } }}
            >
                <div>
                    <Typography
                        variant="h5"
                        color="textSecondary"
                        sx={styles.title}
                    >
                        Strive
                    </Typography>
                </div>
                <List>
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.path} passHref>
                            <ListItem button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText secondary={item.text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <div style={styles.page}>{children}</div>
        </Layout>
    );
};

export default App;
