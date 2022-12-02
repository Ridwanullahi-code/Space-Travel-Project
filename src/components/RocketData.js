import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket, toggleRocket } from '../redux/feature/rocketSlicer';

const RocketData = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  const reserveHandler = (e) => {
    dispatch(toggleRocket(e.target.id));
  };
  return (
    <div className="outer-container">
      {rockets.map((rocket) => (
        <div id={rocket.id} className="rocket-container">
          <img
            src={rocket.image[0]}
            alt="rockets image"
            className="rocket-image"
          />
          <div className="rocket-info">
            <p className="rocket-name">{rocket.name}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p className={rocket.reserved ? 'reserved' : 'not-reserved'}>
                {`${rocket.reserved ? 'Reserved' : ''}`}
              </p>
              <p className="rocket-description">{rocket.description}</p>
            </div>
            <button
              type="button"
              onClick={reserveHandler}
              id={rocket.id}
              className={`${
                rocket.reserved ? 'cancel-reserve' : 'book-reserve'
              }`}
            >
              {`${rocket.reserved ? 'Cancel Rocket' : 'Reserve Rocket'}`}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketData;
