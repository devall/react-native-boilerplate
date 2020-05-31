import { createSelector } from 'reselect';

const getSelectedPhotos = createSelector(
  (state) => state.photos.all,
  (allPhotos) =>
    allPhotos.byId.filter((photo) =>
      allPhotos.selectedIds.includes(photo.node.timestamp),
    ),
);

export { getSelectedPhotos };
