import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import AddItemModal from './AddItemModal';
import EditItemModal from './EditItemModal';
import DeleteItemModal from './DeleteItemModal';

const GrayWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackdrop = () => {
  const add = useSelector(state => state.modals.add);
  const edit = useSelector(state => state.modals.edit);
  const del = useSelector(state => state.modals.del);

  return (
    <GrayWrapper>
      {add && <AddItemModal />}
      {edit && <EditItemModal />}
      {del && <DeleteItemModal />}
    </GrayWrapper>
  )
}

export default ModalBackdrop;