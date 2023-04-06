import img from "../../assets/jsconf.png"

function EventCard() {
  return (
    <div className="border border-gray-400 w-max pb-16 relative">
      <img src={img} alt="js conf" className="w-full" />
      <article className="p-8">
        <h1 className=" text-center text-5xl text-black mb-8 font-thin">
          JSConf Budapest
        </h1>
        <p className=" px-16 text-justify">
          JSConf is a unique conference organization, because we aren't really a
          conference organization at all. We are a very loose federation of
          developers who share the same general idea about how a technical
          conference should be held. We don't believe that one model or process
          fits all communities, in fact we are big advocates of locally run
          events driven by passionate individuals dedicated to the community. We
          make events that aren't from the standard conference playbook because
          we believe you (attendees, speakers, and sponsors) deserve more than
          that. We focus on two things, pushing the boundaries of what is
          thought to be conceivable with JS and providing exceptional human
          social activities that encourage community and friendship building.
          That sets the general tone for each of our events and from there,
          local individuals from each region drive the conference to its own
          incredible level of excellence. Our mission is to make the technology
          community better, more diverse, and more human; in short, we just want
          to make things better. JSConf does not focus on what is popular or
          cool now, but on topics that define and revolutionize the following
          year of technology. We have been the launching point for some of the
          most revolutionary products, services, and technologies on the web. We
          have also been the inspiration point and support base for a wide range
          of conferences beyond the "JSConf" name. Those awesome events are
          featured below, if you are near one, we strongly suggest you attend
          them!
        </p>
      </article>
      <button className="absolute bottom-4 right-4 text-xl px-4 py-2 border border-gray-400">
        Get yours now...
      </button>
    </div>
  )
}

export default EventCard
