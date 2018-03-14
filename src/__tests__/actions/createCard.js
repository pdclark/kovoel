import {
  updateFrontText,
  updateBackText,
  saveCard,
  discardCard,
} from '../../actions/createCard';

describe('src/__tests__/actions/createCard.js', () => {
  describe('updateFrontText', () => {
    it('should create an action to update front side text', () => {
      const fakeText = 'Test updateFrontText';
      const expectedAction = {
        type: 'UPDATE_FRONT_TEXT',
        frontText: fakeText,
      };
      const actualAction = updateFrontText(fakeText);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('updateBackText', () => {
    it('should create an action to update back side text', () => {
      const fakeText = 'Test updateBackText';
      const expectedAction = {
        type: 'UPDATE_BACK_TEXT',
        backText: fakeText,
      };
      const actualAction = updateBackText(fakeText);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('saveCard', () => {
    // Need to add test for POST /cards feature
    it('should create an action to save card to database', async () => {
      const expectedAction = {
        type: 'SAVE_CARD',
      };
      const actualAction = await saveCard();
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('discardCard', () => {
    it('should create an action to discard card', () => {
      const expectedAction = {
        type: 'DISCARD_CARD',
      };
      const actualAction = discardCard();
      expect(actualAction).toEqual(expectedAction);
    });
  });
});