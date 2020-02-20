import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            
            return(
                <div className="projects-grid">
                    {/*Project 1*/}
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>

                {/*Project 2*/}
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #2</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>

                {/*Project 3*/}
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #3</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>

                {/*Project 4*/}
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #4</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>
                </div>
                
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>
            )
        }
        
        else if(this.state.activeTab === 3){
            return(
                <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    </CardText>
                    <CardActions>
                        <Button colored>GITHUB</Button>
                        <Button colored>CODEPEN</Button>
                        <Button colored>LIVEDEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>
            )
        }
    }

    
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vue</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;