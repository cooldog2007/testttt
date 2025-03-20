import React, { Component } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
// import moment from "moment";
import UserView from "./UserView.js";
import AvatarStatus from "components/shared-components/AvatarStatus";
// import userData from "assets/data/user-list.data.json";
import Loading from "components/shared-components/Loading/index.js";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
export class UserList extends Component {
  state = {
    loading: true,
    users: null,
    userProfileVisible: false,
    selectedUser: null,
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const formated = json.map((user) => {
          return { ...user, companyName: user.company.name };
        }); // for 3rd party table component
        this.setState({
          users: formated,
          loading: false,
        });
      });
  };

  render() {
    const { users, userProfileVisible, selectedUser, loading } = this.state;

    if (!users) this.getUsers();
    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <Link
            to={`${APP_PREFIX_PATH}/edit-profile/${record.id}`}
            className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </Link>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Username",
        dataIndex: "username",
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Company",
        dataIndex: "companyName",
        sorter: {
          compare: (a, b) => {
            a = a.companyName.toLowerCase();
            b = b.companyName.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    if (loading && !users) return <Loading />;
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={users} rowKey="id" />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

export default UserList;
