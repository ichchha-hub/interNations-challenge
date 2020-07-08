import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeGroup } from "../actions/groups";
import "./styles.css";

class Groups extends React.Component {
  state = { searchKey: "" };
  handleSearch = (e) => {
    this.setState({ searchKey: e.target.value.toLowerCase() });
  };
  render() {
    const { users, groups } = this.props;
    let showDeleteButton = true;

    return (
      <div>
        <h1>Groups</h1>
        <input type="text" placeholder="Search" onChange={this.handleSearch} />
        {groups.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
              {this.props.groups
                .filter((group) =>
                  group.name.toLowerCase().startsWith(this.state.searchKey)
                )
                .map((group, i) => (
                  <tr key={i}>
                    <td>{group.name}</td>
                    <td>
                      <Link to={`/groups/${group.id}`}>
                        <button className={"remove-button"}>Edit</button>
                      </Link>

                      {!showDeleteButton ? (showDeleteButton = true) : null}
                      {users.map(function (user) {
                        // For each user, finds if the group exists in the users groups
                        // else it renders a delete button
                        if (user.groups.find((grp) => grp.id === group.id)) {
                          showDeleteButton = false;
                        }
                        return showDeleteButton;
                      })}
                      {showDeleteButton ? (
                        <button
                          className={"remove-button"}
                          onClick={() => this.props.removeGroup(group)}
                        >
                          Delete
                        </button>
                      ) : null}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p>Sorry... there are no groups created</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  groups: state.groups,
});

const mapDispatchToProps = (dispatch) => ({
  removeGroup: (group) => dispatch(removeGroup(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
