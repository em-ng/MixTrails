import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateReviewContainer from '../reviews/create_review_form_container';
import EditReviewContainer from '../reviews/edit_review_form_container';

function Modal({modal, closeModal}) {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-review':
      component = <CreateReviewContainer />;
      break;
    case 'edit-review':
      component = <EditReviewContainer review={modal.review} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(Modal);