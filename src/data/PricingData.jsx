import PurpleCheck from "../assets/icons/purple-check.svg"
import PeriwinkleCheck from "../assets/icons/periwinkle-check.svg"
import PeriDeact from "../assets/icons/peri-deactivated.svg"
import CoralCheck from "../assets/icons/coral-check.svg"
import Gem from "../assets/images/pricing-gem.png"

export const subscription = {
  id: 1,
  className: "sub",
  title: "SUBSCRIPTION",
  sale: "",
  cost: "$175",
  subCost: "/month",
  desc: "Monthly Subscription Fee",
  fee: "$400",
  subFee: "/ one time design fee",
  checkList: [
    {
      text: "Includes 5 Fully Responsive Pages",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "$100 Per Page After 5",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "Includes Hosting ",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "Unlimited Edits",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "24/7 Support",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "Lifetime Updates",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
    {
      text: "12 Month Minimum Contract",
      img: PurpleCheck,
      alt: "Purple Checkmark",
    },
  ],
}

export const lumpSum = {
  id: 2,
  className: "lump",
  title: "LUMP SUM",
  sale: "",
  cost: "$3000",
  subCost: "",
  desc: "One Time Fee",
  fee: "$25",
  subFee: "/ monthly hosting fee",
  checkList: [
    {
      text: "Includes 5 Fully Responsive Pages",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "$100 Per Page After 5",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "Custom UI/UX Design",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "12-Month Minimum Commitment",
      img: PeriwinkleCheck,
      alt: "Periwinkle Checkmark",
    },
    {
      text: "Unlimited Edits",
      img: PeriDeact,
      alt: "Periwinkle Deactived",
    },
    {
      text: "24/7 Support",
      img: PeriDeact,
      alt: "Periwinkle Deactived",
    },
  ],

  gem: Gem,
}

export const ecomm = {
  id: 3,
  className: "ecomm",
  title: "E-COMMERCE",
  sale: "",
  cost: "$6000",
  subCost: "/minimum",
  desc: "Starting Price",
  fee: "INQUIRE BELOW",
  subFee: "",
  checkList: [
    {
      text: "Custom Storefront Design",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
    {
      text: "Seamless Payment Integration",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
    {
      text: "Custom-built CRM to Streamline Your Business Operations",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
    {
      text: "Mobile Optimized Platform",
      img: CoralCheck,
      alt: "Coral Checkmark",
    },
  ],
}
