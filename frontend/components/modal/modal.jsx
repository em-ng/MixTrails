import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import CreateReviewContainer from '../reviews/create_review_form_container';
import EditReviewContainer from '../reviews/edit_review_form_container';

function Modal({modal, closeModal}) {
  debugger
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-review':
      debugger
      component = <CreateReviewContainer />;
      break;
    case 'edit-review':
      component = <EditReviewContainer />;
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
  debugger
  return {
    modal: state.ui.modal
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mSTP, mDTP)(Modal));