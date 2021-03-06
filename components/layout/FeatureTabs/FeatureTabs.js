
import { useState } from "react"
import PropTypes from 'prop-types'
import TabFeatureBody from "../TabFeatureBody"
import Button from "../../atoms/Button"

export default function FeatureTabs() {

  const [idActive, setIdActive] = useState(1)

  const handleClick = (id) => {
    setIdActive(id)

    if (innerWidth < 768) {
      scrollTo(0, 1290)
    }
  }

  return (
    <div className="feature-tabs">
      <div className="nav">

        <Button
          type="tab"
          onClick={() => handleClick(1)}
          active={idActive === 1 && true}
        >
          Simple Bookmarking
        </Button>

        <Button
          type="tab"
          onClick={() => handleClick(2)}
          active={idActive === 2 && true}
        >
          Speedy Searching
        </Button>

        <Button
          type="tab"
          onClick={() => handleClick(3)}
          active={idActive === 3 && true}
        >
          Easy Sharing
        </Button>
      </div>

      <div className="body">
        {idActive === 1 ? (
          <TabFeatureBody
            image="/illustration-features-tab-1.svg"
            title="Bookmark in one click"
            description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
            action="More Info"
          />
        ) : idActive === 2 ? (
          <TabFeatureBody
            image="/illustration-features-tab-2.svg"
            title="Intelligent search"
            description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            action="More Info"
          />
        ) : (
          <TabFeatureBody
            image="/illustration-features-tab-3.svg"
            title="Share your bookmarks"
            description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            action="More Info"
          />
        )}
      </div>
    </div>
  )
}

FeatureTabs.propTypes = {
  Button: PropTypes.elementType,
  TabFeatureBody: PropTypes.elementType,
  handleClick: PropTypes.func
}