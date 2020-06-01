import { createSelector } from 'reselect';

export const selectFiltered = state => state.photos.all.filtered;
export const selectPhotos = state => state.photos.all.byId;
export const selectPhotoIds = state => state.photos.all.allIds;
export const selectSelectedPhotoIds = state => state.photos.all.selectedIds;

export const getSelectedPhotos = createSelector(
  selectPhotos,
  selectSelectedPhotoIds,
  (photos, ids) => ids.map(id => photos[id]),
);
