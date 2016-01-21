import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      portfolioItems: Ember.RSVP.Promise.cast(
        [{
          url: 'store.remhq.com',
          image: 'assets/images/rem.jpg',
          images: [ 'assets/images/rem.jpg' ],
          title: 'REM Merch Store',
          blurb: "It's the end of the world as we know it",
          description: "Shopify back-end with custom adaptive theme.",
          tags: [ 'html', 'css', 'bootstrap' ]
        }, {
          url: 'us-store.yogscast.com',
          image: 'assets/images/yogscast.jpg',
          images: [ 'assets/images/yogscast.jpg' ],
          title: 'Yogscast Merch Store',
          blurb: 'Biggest YouTube channel in the UK',
          description: "Shopify back-end with custom adaptive theme.",
          tags: [ 'html', 'css', 'bootstrap' ]
        }, {
          url: false,
          image: 'assets/images/saucey.jpg',
          images: [ 'assets/images/saucey.jpg', 'assets/images/saucey2.jpg' ],
          title: 'Saucey Inc Internal Tool',
          blurb: 'Monitoring and troubleshooting active delivery orders',
          description: "Rails back-end with jQuery front-end. Monitors the company's active deliveries in realtime. Users can edit and troubleshoot orders, view map and directions, and filter active orders by city or store.",
          tags: [ 'rails', 'jquery', 'javascript', 'html', 'css', 'bootstrap' ]
        }, {
          url: false,
          image: 'assets/images/coffeeclub.jpg',
          images: [ 'assets/images/coffeeclub.jpg' ],
          title: 'Coffee Times Internal Tool',
          blurb: 'Customer rewards tracking software',
          description: "Rails/postgreSQL back-end with jQuery front-end. Tracks customer coffee purchases (date, type and amount) and offers free coffee at regular intervals. Over 18,000 customers and 300,000 orders.",
          tags: [ 'rails', 'postgresql', 'html', 'css', 'bootstrap' ]
        }, {
          url: 'www.coffeetimescoffee.com',
          image: 'assets/images/coffeetimes.jpg',
          images: [ 'assets/images/coffeetimes.jpg' ],
          title: 'Coffee Times Web Store',
          blurb: '70+ coffees and 100+ teas ready for purchase',
          description: "Shopify back-end with custom theme.",
          tags: [ 'html', 'css', 'liquid', 'bootstrap' ]
        }]
      ),
      treehouseData: $.getJSON('/assets/json/treehouseScores.json')
    });
  }
});
