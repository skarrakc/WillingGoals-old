let closeModal = () => {
  $( '#add-edit-event-modal' ).modal( 'hide' );
  $( '.modal-backdrop' ).fadeOut();
};

Template.addEditEventModal.helpers({
  modalType( type ) {
    let eventModal = Session.get( 'eventModal' );
    if ( eventModal ) {
      return eventModal.type === type;
    }
  },

  modalLabel() {
    let eventModal = Session.get( 'eventModal' );
    if ( eventModal ) {
      return {
        label: eventModal.type === 'delete' ? 'Delete' : 'Add an'
      };
    }
  },

  event() {
    let eventModal = Session.get( 'eventModal' );

    if ( eventModal ) {
      return eventModal.type === 'delete' ? Events.findOne( eventModal.event ) : {
        start: eventModal.date,
        end: eventModal.date
      };
    }
  },

  enabledGoals() {
    return Goals.find({ author: Meteor.userId() ,achieving: true });
  },
});

Template.addEditEventModal.events({
  'submit form' ( event, template ) {
    event.preventDefault();
    eventItem  = {
          type: template.find( '[name="type"] option:selected' ).value,
          start: template.find( '[name="start"]' ).value,
          end: template.find( '[name="end"]' ).value,
          author: Meteor.userId(),
    };
    Meteor.call( 'addEvent', eventItem, ( error ) => {
        if (error) {
                throw new Meteor.Error("Logout failed");
            };
        closeModal();
    });
  },

  'click .deleteEvent'(event, template) {
    event.preventDefault();
    let eventModal = Session.get( 'eventModal' );
    Meteor.call( 'deleteEvent', eventModal.event, ( error ) => {
        if (error) {
                throw new Meteor.Error("Logout failed");
            };
        closeModal();
    });
  },

  'click .shareBtn'(event) {
    FB.ui({
      method: 'feed',
      link: 'https://developers.facebook.com/docs/',
      caption: 'An example caption',
      }, function(response){});
    }
});
