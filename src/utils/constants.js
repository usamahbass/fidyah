export const LANGUAGES = {
  LISTS: [
    {
      label: "Indonesia",
      value: "id",
    },
    {
      label: "English",
      value: "en",
    },
  ],
};

export const THEMES = {
  LISTS: [
    {
      label: null,
      value: "light",
    },
    {
      label: null,
      value: "dark",
    },
  ],
  DARK: "dark",
  LIGHT: "light",
};

export const CURRENCY = {
  LISTS: [
    // {
    //   label: "Rupiah",
    //   value: "rp",
    // },
    {
      label: "Dollar",
      value: "$",
    },
  ],
  RUPIAH: "rp",
  DOLLAR: "$",
};

export const DEVELOPERS = [
  {
    name: "Usamah Basalamah",
    role: "Frontend Developer",
    github: "https://github.com/usamahbass",
  },
  {
    name: "Muhammad Nouval Alkaff",
    role: "Backend Developer",
    github: "https://github.com/nouvalkaff",
  },
];

export const REPOSITORIES = [
  {
    name: "UI",
    role: "Frontend Developer",
    github: "https://github.com/usamahbass/fidyah",
  },
  {
    name: "API",
    role: "Backend Developer",
    github: "https://github.com/nouvalkaff/fidyahCalculator",
  },
];

export const PAYMENT_TYPE = {
  QRIS: "qris",
  MANUAL: "manual",
};

export const ASSETS = [
  {
    name: "Storyset",
    link: "https://storyset.com/",
  },
];

export const INIT_PAYABLE = {
  bayarFidyah: "Rp 0",
  qadhaPuasa: 0,
  qty: 0,
};

export const DEFAULT_PAYABLE_STATE = { id: 1, ...INIT_PAYABLE };

export const ADMIN_NUMBER = '6281398418530';

export const WA_LINK_LEARN_MORE_DISTRIBUTION = `https://api.whatsapp.com/send/?phone=${ADMIN_NUMBER}&text=Assalamualaikum,%2C+Saya+ingin+dapat+info+lebih+lanjut+mengenai+fidyah&type=phone_number&app_absent=0`;