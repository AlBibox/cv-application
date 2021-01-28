import React, { Component } from 'react';
import SingleSkill from './SingleSkill';
import uniqid from "uniqid";


class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skillsList: [],
            addingMode: false
        }

        this.addNewElement = this.addNewElement.bind(this);
        this.toggleAddingMode = this.toggleAddingMode.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }


    toggleAddingMode() {
        this.setState({
            addingMode: !this.state.addingMode,
        })
    }


    addNewElement() {
        this.toggleAddingMode();
        this.setState({
            skillsList: this.state.skillsList.concat(<SingleSkill key={uniqid()} />)
        })
    }


    removeElement(e) {
        this.setState({
            skillsList: this.state.skillsList
                .filter(item => e._reactInternals.key !== item.key)
        })

        if (this.state.addingMode) this.setState({ addingMode: false })   
    }

    
    render() {
        return (
            <div className="skills" >
                <h2>SKILLS</h2>
                <div className="itemsContainer">
                    {this.state.skillsList
                        .map(item =>
                            <SingleSkill
                                key={item.key}
                                addingMode={this.toggleAddingMode}
                                removeEl={this.removeElement}
                            />
                        )}
                </div>
                
                {!this.state.addingMode &&
                    <div className="generalButtonContainer"> 
                        <button onClick={this.addNewElement}>ADD NEW SKILL</button>
                    </div>
                }
            </div>
        )
    }
}

export default Skills