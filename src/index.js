import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const GRID_DATA = [
  //   Row A
  {
    id: "A1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A4",
    letter: "D",
    clues: ["Dn1"],
    label: "1",
  },
  {
    id: "A5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row B
  {
    id: "B1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B3",
    letter: "B",
    clues: ["Ac2"],
    label: "2",
  },
  {
    id: "B4",
    letter: "I",
    clues: ["Dn1,Ac2"],
    label: null,
  },
  {
    id: "B5",
    letter: "G",
    clues: ["Ac2"],
    label: null,
  },
  {
    id: "B6",
    letter: "B",
    clues: ["Ac2"],
    label: null,
  },
  {
    id: "B7",
    letter: "A",
    clues: ["Ac2"],
    label: null,
  },
  {
    id: "B8",
    letter: "N",
    clues: ["Ac2"],
    label: null,
  },
  {
    id: "B9",
    letter: "G",
    clues: ["Ac2"],
    label: null,
  },

  //   Row C
  {
    id: "C1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C4",
    letter: "R",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "C5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C9",
    letter: null,
    clues: null,
    label: null,
  },

  // Row D
  {
    id: "D1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D3",
    letter: "P",
    clues: ["Ac3"],
    label: "3",
  },
  {
    id: "D4",
    letter: "I",
    clues: ["Dn1,Ac3"],
    label: null,
  },

  {
    id: "D5",
    letter: "T",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "D6",
    letter: "B",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "D7",
    letter: "U",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "D8",
    letter: "L",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "D9",
    letter: "L",
    clues: ["Ac3"],
    label: null,
  },

  //   Row E
  {
    id: "E1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E4",
    letter: "G",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "E5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row F
  {
    id: "F1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "F2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "F3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "F4",
    letter: "E",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "F5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "F6",
    letter: "M",
    clues: ["Dn4"],
    label: "4",
  },
  {
    id: "F7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "F8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "F9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row G
  {
    id: "G1",
    letter: "I",
    clues: ["Ac5"],
    label: "5",
  },
  {
    id: "G2",
    letter: "W",
    clues: ["Ac5"],
    label: null,
  },
  {
    id: "G3",
    letter: "A",
    clues: ["Ac5"],
    label: null,
  },
  {
    id: "G4",
    letter: "N",
    clues: ["Dn1", "Ac5"],
    label: null,
  },
  {
    id: "G5",
    letter: "F",
    clues: ["Ac5"],
    label: null,
  },
  {
    id: "G6",
    letter: "A",
    clues: ["Dn4", "Ac5"],
    label: null,
  },
  {
    id: "G7",
    letter: "L",
    clues: ["Ac5"],
    label: null,
  },
  {
    id: "G8",
    letter: "S",
    clues: ["Ac5"],
    label: null,
  },
  {
    id: "G9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row H
  {
    id: "H1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H6",
    letter: "Y",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "H7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row I
  {
    id: "I1",
    letter: "L",
    clues: ["Ac6"],
    label: "6",
  },
  {
    id: "I2",
    letter: "E",
    clues: ["Ac6"],
    label: null,
  },
  {
    id: "I3",
    letter: "G",
    clues: ["Ac6"],
    label: null,
  },
  {
    id: "I4",
    letter: "A",
    clues: ["Ac6"],
    label: null,
  },
  {
    id: "I5",
    letter: "T",
    clues: ["Ac6"],
    label: null,
  },
  {
    id: "I6",
    letter: "O",
    clues: ["Dn4", "Ac6"],
    label: null,
  },
  {
    id: "I7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row J
  {
    id: "J1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J6",
    letter: "R",
    clues: ["Dn4", "Ac7"],
    label: "7",
  },
  {
    id: "J7",
    letter: "A",
    clues: ["Ac7"],
    label: null,
  },
  {
    id: "J8",
    letter: "P",
    clues: ["Ac7"],
    label: null,
  },
  {
    id: "J9",
    letter: null,
    clues: null,
    label: null,
  },
];

const CLUE_DATA = {
  Dn1: {
    clue: "Koordinator Musik",
    answer: "DIRIGEN",
    direction: "down",
    number: 1,
    boxes: ["A4", "B4", "C4", "D4", "E4", "F4", "G4"],
  },
  Ac2: {
    clue: "Group musik korea merilis album REMEMBER tahun 2008",
    answer: "BIGBANG",
    direction: "across",
    number: 2,
    boxes: ["B3", "B4", "B5", "B6", "B7", "B8", "B9"],
  },
  Ac3: {
    clue: "Penyanyi rap yang merilis album pertama MIAMI",
    answer: "PITBULL",
    direction: "across",
    number: 3,
    boxes: ["D3", "D4", "D5", "D6", "D7", "D8", "D9"],
  },
  Dn4: {
    clue: "Skala musik yang bersifat gembira dan bersemangat",
    answer: "MAYOR",
    direction: "down",
    number: 4,
    boxes: ["F6", "G6", "H6", "I6", "J6"],
  },
  Ac5: {
    clue: "Penyanyi yang bernama asli VIRGIAWAN LISTANTO",
    answer: "IWANFALS",
    direction: "Across",
    number: 4,
    boxes: ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"],
  },
  Ac6: {
    clue: "Tanda untuk memainkan beberapa nada tanpa terputus",
    answer: "LEGATO",
    direction: "Across",
    number: 6,
    boxes: ["I1", "I2", "I3", "I4", "I5", "I6"],
  },
  Ac7: {
    clue: "Percakapan tunggal dan berirama diiringi musik",
    answer: "RAP",
    direction: "Across",
    number: 7,
    boxes: ["F2", "G2", "H2", "I2", "J2", "K2", "L2", "M2", "N2"],
  },
};

class Crossword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: GRID_DATA,
      clues: CLUE_DATA,
      activeClueBoxes: CLUE_DATA["Dn1"].boxes,
      activeClue: ["Dn1"],
      boxInFocus: CLUE_DATA["Dn1"].boxes[0],
      showAnswerStatus: false,
      answerStatus: {},
    };

    this.setActiveClueBoxes = this.setActiveClueBoxes.bind(this);
    this.setActiveClue = this.setActiveClue.bind(this);
    this.setBoxInFocus = this.setBoxInFocus.bind(this);
    this.checkAnswers = this.checkAnswers.bind(this);
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this);
  }

  setActiveClueBoxes(boxes) {
    this.setState({
      activeClueBoxes: boxes,
    });
  }

  setActiveClue(clue) {
    this.setState({
      activeClue: clue,
    });
  }

  setBoxInFocus(box) {
    this.setState({
      boxInFocus: box,
    });
  }

  checkAnswers() {
    const answerStatus = {};

    this.state.grid.forEach((box) => {
      const boxElement = document.getElementById(box.id);
      if (boxElement) {
        const inputElement = boxElement.getElementsByTagName("input")[0];
        if (inputElement) {
          const userAnswer = inputElement.value;
          const correctAnswer = this.state.clues[box.clues[0]].answer;
          if (
            userAnswer &&
            userAnswer.toUpperCase() === correctAnswer.toUpperCase()
          ) {
            answerStatus[box.id] = true;
            this.handleCorrectAnswer(boxElement);
          } else {
            answerStatus[box.id] = false;
            this.handleIncorrectAnswer(boxElement);
          }
        }
      }
    });

    this.setState({
      showAnswerStatus: true,
      answerStatus: answerStatus,
    });
  }

  handleCorrectAnswer = (boxElement) => {
    boxElement.classList.add("correct-answer");
  };

  handleIncorrectAnswer = (boxElement) => {
    boxElement.classList.add("incorrect-answer");
  };

  render() {
    return (
      <div className="crossword">
        <Clues
          clues={this.state.clues}
          setActiveClueBoxes={this.setActiveClueBoxes}
          activeClue={this.state.activeClue}
          setActiveClue={this.setActiveClue}
          setBoxInFocus={this.setBoxInFocus}
        />
        <Board
          grid={this.state.grid}
          allClues={this.state.clues}
          clues={this.state.clues}
          setActiveClueBoxes={this.setActiveClueBoxes}
          highlightedBoxes={this.state.activeClueBoxes}
          setActiveClue={this.setActiveClue}
          setBoxInFocus={this.setBoxInFocus}
          boxInFocus={this.state.boxInFocus}
        />
      </div>
    );
  }
}

class Clues extends React.Component {
  constructor(props) {
    super(props);
    const cluesAcross = [];
    const cluesDown = [];

    for (const key in this.props.clues) {
      const clue = this.props.clues[key];
      clue.id = key;
      if (clue.direction === "across") {
        cluesAcross.push(clue);
      } else {
        cluesDown.push(clue);
      }
    }

    this.state = {
      across: cluesAcross,
      down: cluesDown,
    };
  }

  render() {
    return (
      <div className="clue-lists">
        <div className="clue-list-wrapper">
          <h2>Across</h2>
          <ol className="clue-list">
            {this.state.across.map((clueData) => (
              <Clue
                key={clueData.id}
                clueID={clueData.id}
                clueText={clueData.clue}
                clueNumber={clueData.number}
                clueBoxes={clueData.boxes}
                setActiveClueBoxes={this.props.setActiveClueBoxes}
                setActiveClue={this.props.setActiveClue}
                isActive={this.props.activeClue.indexOf(clueData.id) > -1}
                setBoxInFocus={this.props.setBoxInFocus}
              />
            ))}
          </ol>
        </div>
        <div className="clue-list-wrapper">
          <h2>Down</h2>
          <ol className="clue-list">
            {this.state.down.map((clueData) => (
              <Clue
                key={clueData.id}
                clueID={clueData.id}
                clueText={clueData.clue}
                clueNumber={clueData.number}
                clueBoxes={clueData.boxes}
                setActiveClueBoxes={this.props.setActiveClueBoxes}
                setActiveClue={this.props.setActiveClue}
                isActive={this.props.activeClue.indexOf(clueData.id) > -1}
                setBoxInFocus={this.props.setBoxInFocus}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.isActive,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      active: newProps.isActive,
    });
  }

  handleClick() {
    const activeClue = [];
    activeClue.push(this.props.clueID);
    this.props.setActiveClueBoxes(this.props.clueBoxes);
    this.props.setActiveClue(activeClue);
    this.props.setBoxInFocus(this.props.clueBoxes[0]);
  }

  render() {
    return (
      <li className={`clue ${this.state.active ? "active" : ""}`}>
        <button className="clue-button" onClick={this.handleClick}>
          <span className="clue-number">{this.props.clueNumber}.</span>
          <span className="clue-text">{this.props.clueText}</span>
        </button>
      </li>
    );
  }
}

class Board extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      const container = document.getElementById("crossword-board-container");
      if (container) {
        container.addEventListener("click", this.handleOutsideClick);
      }
    });
  }

  componentWillUnmount() {
    const container = document.getElementById("crossword-board-container");
    if (container) {
      container.removeEventListener("click", this.handleOutsideClick);
    }
  }

  handleOutsideClick = (event) => {
    if (!event.target.closest(".box")) {
      this.clearBoxStyles();
      // Clear the focus when clicking outside the box
      this.props.setBoxInFocus(null);
    }
  };

  clearBoxStyles() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.classList.remove("correct-answer");
      box.classList.remove("incorrect-answer");
    });
  }

  render() {
    return (
      <div className="crossword-board">
        {this.props.grid.map((box) => {
          const { id, letter, clues, label } = box;
          return (
            <Box
              key={id}
              id={id}
              letter={letter}
              boxClues={clues}
              label={label}
              allClues={this.props.allClues}
              isHighlighted={this.props.highlightedBoxes.indexOf(id) > -1}
              setActiveClueBoxes={this.props.setActiveClueBoxes}
              setActiveClue={this.props.setActiveClue}
              setBoxInFocus={this.props.setBoxInFocus}
              isInFocus={this.props.boxInFocus === id}
            />
          );
        })}
      </div>
    );
  }
}

class Box extends Component {
  state = {
    highlight: this.props.isHighlighted,
    isInFocus: this.props.isInFocus,
    answerStatus: null,
  };

  textInput = React.createRef();

  componentDidUpdate(prevProps) {
    if (prevProps.isInFocus !== this.props.isInFocus) {
      if (this.props.isInFocus) {
        this.textInput.current.focus();
      }
    }
  }

  handleFocus = (event) => {
    this.props.setActiveClue(this.props.boxClues);
    this.props.setActiveClueBoxes(this.props.boxClues);
    this.props.setBoxInFocus(event.target.id);

    this.textInput.current.addEventListener("input", () => {
      const userAnswer = this.textInput.current.value.toUpperCase();
      const correctAnswer = this.props.letter.toUpperCase();

      if (userAnswer === "") {
        // Hapus warna jika tidak ada huruf dalam kotak
        this.setState({ answerStatus: null });
      } else if (userAnswer === correctAnswer) {
        // Atur warna hijau jika jawaban benar
        this.setState({ answerStatus: "correct" });
      } else {
        // Atur warna merah jika jawaban salah
        this.setState({ answerStatus: "incorrect" });
      }
    });
  };

  render() {
    let visibleLabel;
    let input;
    let boxClassName = "box";

    if (this.props.label) {
      visibleLabel = <span className="box-label">{this.props.label}</span>;
    }

    if (this.props.letter) {
      input = (
        <input
          type="text"
          maxLength="1"
          className={`box-input ${this.state.highlight ? "highlight" : ""}`}
          onFocus={this.handleFocus}
          ref={this.textInput}
        />
      );
    }
    if (this.state.answerStatus === "correct") {
      boxClassName += " correct-answer";
    } else if (this.state.answerStatus === "incorrect") {
      boxClassName += " incorrect-answer";
    }

    return (
      <div className={`box${!this.props.letter ? " blank" : ""}`}>
        {visibleLabel}
        {input}
      </div>
    );
  }
}

export default Box;
ReactDOM.render(<Crossword />, document.querySelector("#CrosswordApp"));
