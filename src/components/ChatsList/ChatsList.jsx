import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const chatsList = [
  {
    name: 'Work',
    id: 0
  },
  {
    name: 'Crazy friends',
    id: 1
  },
  {
    name: 'Lovely family',
    id: 2
  }
]
export const ChatsList = () => {
    return (
      <List sx={{ width: '100%', maxWidth: 300, height: '100%', minHeight: '610px', bgcolor: '#26c6da' }}>
        {chatsList.map((item) => (
                                <ListItem button key={item.id}>
                                    <ListItemText primary={item.name}/>
                                </ListItem>
                            ))}
      </List>
    )
  }