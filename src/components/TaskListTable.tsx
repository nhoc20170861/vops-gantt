import React, { useState } from "react";
import { Task } from "gantt-task-react";
import { getStartEndDateForProject, initTasks } from "../helper";
type TaskListTable = {
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  /**
   * Sets selected task by id
   */
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
  handleAddTask: (task: Task) => void;
};
const TaskListTable: React.FC<TaskListTable> = ({
  tasks,
  rowWidth,
  rowHeight,
  onExpanderClick,
  handleAddTask,
}: TaskListTable) => {
  return (
    <div className="taskList-container">
      <div className="taskList-wrapper">
        {tasks.map((item, i) => {
          const isProject = item.type === "project";
          return (
            <>
              {isProject ? (
                <div className="taskList-assignee" key={item.id}>
                  <div className="box-contain-avatar">
                    <img
                      src="./avatar.jpg"
                      alt="hi"
                      className="avatar-assignee"
                    ></img>
                  </div>
                  <div className="box-contain-userinfo">
                    <div className="userinfo-name">Lê Mạnh Hùng</div>

                    <div className="userinfo-username">(@hunglm25)</div>
                    <div className="userinfo-gettasks">4 công việc</div>
                  </div>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => onExpanderClick(item)}
                  >
                    ^
                  </div>
                </div>
              ) : (
                <div>{item.name}</div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TaskListTable;
