import React, { Component } from "react";
import "./App.css"; // Default CSS
import Statistics from "./Statistics";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good }) =>
    Math.floor((good / this.countTotalFeedback(this.state)) * 100);

  onLeaveFeedback = (option, prop) => {
    this.setState({
      [prop]: option + 1,
    });
    this.countTotalFeedback(this.state);
    this.countPositiveFeedbackPercentage(this.state);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="maincontainer">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {good + bad + neutral > 0 ? (
          <Section title="Feedback statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
