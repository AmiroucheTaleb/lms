import Hero from "../../componenets/Hero/Hero"
import img from "../../assets/event-image.png"
import EventCard from "../../componenets/EventCard/EventCard"

function Event() {
  return (
    <div>
      <Hero
        image={img}
        first="Get your invitation"
        second="to our events"
        third="NOW"
      />
      <div className="p-16 flex gap-16 flex-wrap xl:flex-nowrap">
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default Event
