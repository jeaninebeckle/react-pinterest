// need to get all of the pins by the board id and then when that
// board id is deleted, all of the pins get deleted too

import boardsData from './boardsData';
import pinData from './pinData';

const totallyRemovePins = (boardId) => new Promise((resolve, reject) => {
  boardsData.deleteBoard(boardId)
    .then(() => {
      pinData.getPinsByBoardId(boardId).then((pins) => {
        pins.forEach((pin) => {
          pinData.deletePin(pin.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

export default { totallyRemovePins };
