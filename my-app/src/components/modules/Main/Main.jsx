import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNote,
  getNotesData,
  editNote,
  removeNote,
} from '../../../redux/action/authAction';
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export const Main = (props) => {
  const [open, setOpen] = React.useState(false);
  const [addText, setAddText] = React.useState('');
  const [editData, setEditData] = React.useState({
    id: '',
    color: '',
  });
  const [editText, setEditText] = React.useState('');

  const handleClickOpen = ({ id, text, color }) => {
    setEditData({ id: id, color: color });
    setEditText(text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => dispatch(getNotesData()), [dispatch]);

  const handleAddText = useCallback((e) => {
    setAddText(e.target.value);
  }, []);

  const handleEditText = useCallback((e) => {
    setEditText(e.target.value);
  }, []);

  // const handleAddNote = useCallback(
  //   (color) => {
  //     dispatch(createNote({ text: addText, color: color }));
  //   },
  //   [addText, dispatch]
  // );
  const handleAddNote = (color) => {
    dispatch(createNote({ text: addText, color: color }));
    dispatch(getNotesData());
    setAddText('');
  };

  const handleEditNote = useCallback(
    (id, color) => {
      dispatch(editNote(id, { text: editText, color: color }));
    },
    [dispatch, editText]
  );

  const handleDeleteNote = async () => {
    dispatch(removeNote(editData.id));
    setOpen(false);
    dispatch(getNotesData());
  };

  const data = useSelector((state) => state.note);
  const colors = [
    '#4c7ead',
    '#a1589e',
    '#c44633',
    '#77c433',
    '#c79e2e',
    '#33b8c4',
  ];
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '5rem',
          padding: '1rem',
          boxSizing: 'border-box',
          marginBottom: '2rem',
        }}
      >
        <textarea
          type="text"
          onChange={handleAddText}
          value={addText}
          style={{ width: '100%', height: '5rem' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1rem',
          boxSizing: 'border-box',
        }}
      >
        {colors.map((color) => (
          <div
            className="color_strip_item"
            style={{
              backgroundColor: color,
              flex: 1,
              height: '2rem',
              cursor: 'pointer',
            }}
            key={color}
            onClick={() => handleAddNote(color)}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          margin: '1rem',
        }}
      >
        {data?.notes?.map((i, index) => {
          return (
            <div
              style={{
                backgroundColor: i.color,
                padding: '0.5rem',
                minWidth: '4rem',
                maxWidth: '10rem',
                minHeight: '4rem',
                maxHeight: '5rem',
                borderRadius: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                overflow: 'scroll',
                justifyContent: 'flex-start',
              }}
              key={index}
              onClick={() =>
                handleClickOpen({ id: i._id, color: i.color, text: i.text })
              }
            >
              <div>
                {i.text.length > 50 ? i.text.substring(0, 50) + '...' : i.text}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <IconButton onClick={() => handleDeleteNote(editData.id)}>
            <DeleteIcon />
          </IconButton>
          <textarea
            type="text"
            onChange={handleEditText}
            value={editData.text}
            style={{ width: '100%', height: '5rem' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '1rem',
              boxSizing: 'border-box',
            }}
          >
            {colors.map((color) => (
              <div
                className="color_strip_item"
                style={{
                  backgroundColor: color,
                  flex: 1,
                  height: '2rem',
                  cursor: 'pointer',
                }}
                key={color}
                onClick={() => handleEditNote(editData.id, color)}
              />
            ))}
          </div>
        </Dialog>
      </div>
    </div>
  );
};
