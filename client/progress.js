Template.progress.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    events( start, end, timezone, callback ) {
      let data = Events.find().fetch().map( ( event ) => {
        return event;
      });

      if ( data ) {
        callback( data );
      }
    },
    eventRender( event, element ) {
      element.find( '.fc-content' ).html(
        `
         <p class="achieved">#${ event.type }</p>
        `
      );
    },
    dayClick( date ) {
      Session.set( 'eventModal', { type: 'add', date: date.format() } );
      $( '#add-edit-event-modal' ).modal( 'show' );
    },
    eventClick( event ) {
      Session.set( 'eventModal', { type: 'delete', event: event._id } );
      $( '#add-edit-event-modal' ).modal( 'show' );
    }
  });

  Tracker.autorun( () => {
    Events.find().fetch();
    $( '#events-calendar' ).fullCalendar( 'refetchEvents' );
  });
});

