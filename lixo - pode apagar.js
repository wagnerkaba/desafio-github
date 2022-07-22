        // <main>
            <Container maxWidth="lg">

                <List dense={false}>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt={auth.user}
                                src={auth.avatar}
                                sx={{ width: 100, height: 100 }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>,

                </List>

                <h1>{auth.user}</h1>
                <Avatar
                    alt={auth.user}
                    src={auth.avatar}
                    sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h4">
                    {auth.user}
                </Typography>


            </Container> 


    {/* </main > */ }
