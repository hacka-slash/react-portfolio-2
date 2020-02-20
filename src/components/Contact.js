import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Placido Hoff</h2>
                        <img
                            src="https://cdn3.vectorstock.com/i/1000x1000/16/32/hand-drawn-with-brush-swirl-spiral-yin-yang-symbol-vector-14691632.jpg"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>asdasdasdsafsadfgsdagadsads sadfsdaffasdgsadgsa asgsfagasfgasgdsa</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                         (123) 456 - 7890
                                        Bryan Cranston
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                         someone@example.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                         MyTwitterHandle
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                        
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact;