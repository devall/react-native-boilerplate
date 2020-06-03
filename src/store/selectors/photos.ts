import { createSelector } from 'reselect';

export const selectFiltered = (state) => state.photos.all.filtered;
export const selectPhotos = state => state.photos.all.byId;
export const selectPhotoIds = state => state.photos.all.allIds;
export const selectSelectedPhotoIds = state => state.photos.all.selectedIds;
export const selectCurrentIndex = state => state.photos.all.selectedIndex;

export const getSelectedPhotos = createSelector(
  selectPhotos,
  selectSelectedPhotoIds,
  (photos, ids) => ids.map((id: string) => photos[id]),
);

export const getCurrentPair = createSelector(selectFiltered, filtered => {
  const [pair] = filtered.filter(item => item.length > 1);

  if (pair) {
    return pair;
  }

  return filtered[0];
});
