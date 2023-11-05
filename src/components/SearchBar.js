import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // moved this functin to an inline one as it's quite
  //   const onInputChange = (e) => {
  //     setTerm(e.target.value);
  //   };

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onInputChange = (e) => {
//     this.setState({ term: e.target.value });
//   };

//   onFormSubmit = (e) => {
//     e.preventDefault();

//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="ui segment search-bar">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               value={this.state.term}
//               onChange={this.onInputChange}
//               type="text"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
