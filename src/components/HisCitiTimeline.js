import React from 'react';
import $ from "jquery";

function HisCitiTimeline() {

  /* Check the location of each element */
  $('.content').each(function (i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height();

    if (bottom_of_object > bottom_of_window) {
      $(this).addClass('hidden');
    }
  });


  $(window).scroll(function () {
    /* Check the location of each element hidden */
    $('.hidden').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fadeIn it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 700);
      }
    });
  });

  return (

    <>
      <section className="hc-timeline">



        <ul>
          <li>
            <div className="hc-content">
              <h2>
                <time>EVOLUTION</time>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis praesentium itaque veniam dolorum cupiditate asperiores optio beatae, qui perferendis ipsam odit modi nemo natus corrupti neque quos distinctio facilis?</p>
            </div>
          </li>
          <li>
            <div className="hc-content">
              <h2>
                <time>BUILD HERITAGE</time>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quas, reiciendis quis sequi voluptatem consectetur adipisci accusamus hic vel vero ea ad iure! Natus, ipsum, enim aspernatur fugit voluptatibus similique?</p>
            </div>
          </li>
          <li>
            <div className="hc-content">
              <h2>
                <time>LIVING TRADITIONS</time>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, expedita. Dolorem blanditiis, delectus omnis eos accusamus mollitia et cupiditate officia maxime vel, nesciunt alias eius, quibusdam in ea eveniet ut!</p>
            </div>
          </li>
          <li>
            <div className="hc-content">
              <h2>
                <time>PEOPLE, PERSONALITIES & INSTITUTIONS</time>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptas voluptatum dolorum, quibusdam dignissimos animi pariatur laboriosam quis explicabo similique aperiam debitis quam velit quod, reprehenderit harum ratione. Iste, unde?</p>
            </div>
          </li>
          <li>
            <div className="hc-content">
              <h2>
                <time>NATURAL HERITAGE</time>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet inventore odit placeat in laboriosam dolore ducimus vero, sapiente ipsam veritatis, numquam libero itaque dolores natus ex aliquam nam nihil cumque.</p>
            </div>
          </li>
          <li>
            <div className="hc-content">
              <h2>
                <time>STREETS & BAZZARS</time>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sequi nobis, blanditiis quae dolorem quasi reiciendis odio qui fugit? Officiis quos aspernatur mollitia dolorum pariatur repellendus quaerat dolorem magnam quo.</p>
            </div>
          </li>
          
        </ul>
      </section>

    </>
  )
}

export default HisCitiTimeline;
