import React from "react";
type TaskListHeader = {
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
};
const TaskListHeader: React.FC<TaskListHeader> = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-col-title">
          <p className="header-text">TIÊU ĐỀ</p>
        </div>
        <div className="header-col-startDate">
          <p className="header-text start-date">BẮT ĐẦU</p>
        </div>
        <div className="header-col-endDate">
          <p className="header-text end-date">KẾT THÚC</p>
        </div>
      </div>
    </div>
  );
};

export default TaskListHeader;
