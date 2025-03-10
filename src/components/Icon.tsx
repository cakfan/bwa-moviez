export const Icons = {
  search: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_26)">
        <path
          d="M21.7312 20.4352L15.475 14.179C16.6868 12.6822 17.4165 10.7801 17.4165 8.70845C17.4165 3.90699 13.5097 0.000183105 8.70822 0.000183105C3.90677 0.000183105 0 3.90695 0 8.7084C0 13.5099 3.90681 17.4167 8.70826 17.4167C10.7799 17.4167 12.682 16.687 14.1789 15.4752L20.4351 21.7314C20.6138 21.9101 20.8484 22 21.0831 22C21.3178 22 21.5525 21.9101 21.7312 21.7314C22.0896 21.373 22.0896 20.7936 21.7312 20.4352ZM8.70826 15.5833C4.91695 15.5833 1.83333 12.4997 1.83333 8.7084C1.83333 4.91709 4.91695 1.83347 8.70826 1.83347C12.4996 1.83347 15.5832 4.91709 15.5832 8.7084C15.5832 12.4997 12.4995 15.5833 8.70826 15.5833Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_26">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  star: ({ fillColor }: { fillColor: string }) => (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
        fill={fillColor ?? ""}
      />
    </svg>
  ),
};
