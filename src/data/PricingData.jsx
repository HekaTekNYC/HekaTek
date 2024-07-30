import PurpleCheck from "../assets/icons/purple-check.svg"
import PeriwinkleCheck from "../assets/icons/periwinkle-check.svg"
import CoralCheck from "../assets/icons/coral-check.svg"
import Gem from "../assets/images/pricing-gem.png"

export const subscription = {
  id: 1,
  className: "sub",
  title: "SUBSCRIPTION",
  cost: "$150",
  subCost: "/month",
  desc: "monthly subscription fee",
  fee: "$350",
  subFee: "/ one time design fee",
  checkList: [
    {
      text: "5 fully responsive pages included, $100 for each additional page",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "Includes hosting ",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "24/7 customer service",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "Lifetime updates",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "6 month minimum contract",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
  ],
}

export const lumpSum = {
  id: 2,
  className: "lump",
  title: "LUMP SUM",
  cost: "$2000",
  subCost: "",
  desc: "one time fee",
  fee: "$350",
  subFee: "/ monthly hosting fee",
  checkList: [
    {
      text: "5 fully responsive pages, $100 for each additional page",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "Custom design",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "For $50 per month, we provide hosting, 24/7 support, unlimited edits, and updates for life",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "12 month minimum commitment",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
  ],
  gem: Gem,
}

export const ecomm = {
  id: 3,
  className: "ecomm",
  title: "E-COMMERCE",
  cost: "$6000",
  subCost: "/minimum",
  desc: "starting price",
  fee: "INQUIRE BELOW",
  subFee: "",
  checkList: [
    {
      text: "Custom storefront design",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
    {
      text: "Seamless payment integration",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
    {
      text: "Custom-built CRM to streamline your business operations",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
    {
      text: "Mobile optimized platform",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
  ],
}
