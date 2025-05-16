import React from "react";

export const User2List = () => {
  return (
    <div className="User2List">
      <span>User2 목록</span>
      <table border="1">
        <tbody>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대폰</th>
            <th>나이</th>
            <th>관리</th>
          </tr>

          <tr>
            <td>a101</td>
            <td>홍길동</td>
            <td>010-2121-1111</td>
            <td>23</td>
            <td>
              <button onClick={null}>수정</button>
              <button onClick={null}>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
