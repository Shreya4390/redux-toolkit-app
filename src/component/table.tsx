/* eslint-disable array-callback-return */
import * as React from 'react';
import '../app/app.css'
import { Todo } from '../types/types';
import { RootState } from '../app/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../pages/signUpPage/createSlice/userSlice';
export interface ITableProps {
  headers: string[];
  editAction: (user: Todo) => void;
}

export default function Table(props: ITableProps) {

  const { headers, editAction } = props;
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (state: RootState) => state.userSlice
  );

  function deleteAction(userData: Todo) {
    let {
      id
    } = userData;
    dispatch(deleteUser(id))
  };


  return (
    <div className="MyTable">
      <table>
        <tbody>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
          {userDetails?.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.levelOfEducation}</td>
                <td>{item.gender}</td>
                <td>{item.profile}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    type="button"
                    id={item.id as string}
                    onClick={() => editAction(item as Todo)}
                    className="btn btn-sm btn-secondary btn-ct"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id={item.id as string}
                    onClick={() => deleteAction(item as Todo)}
                    className="btn btn-sm btn-danger btn-ct"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}



