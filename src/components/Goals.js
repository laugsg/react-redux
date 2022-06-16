import React from 'react'
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'
import { connect } from 'react-redux'

// Components
import List from './List'

class Goals extends React.Component {
    addItem = (e) => {
      e.preventDefault();
      this.props.dispatch(
        handleAddGoal(this.input.value, () => (this.input.value = ""))
      );
    };

    removeItem = (goal) => {
      this.props.dispatch(handleDeleteGoal(goal));
    };

    render() {
      return (
        <div>
          <h1>Goals List</h1>

          <input
            type="text"
            placeholder="Add Goal"
            ref={(input) => (this.input = input)}
          />

          <button onClick={this.addItem}>Add Goal</button>
          <List remove={this.removeItem} items={this.props.goals} />
        </div>
      );
    }
  }

  export default connect((state) => ({
    goals: state.goals,
  }))(Goals);