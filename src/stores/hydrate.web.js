import { create } from 'mobx-persist';

export default create({
  storage: localStorage,
  jsonify: true,
});

