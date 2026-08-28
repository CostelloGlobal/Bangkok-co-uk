// Shared stroke icon set — safe to import from both server and client components.
export const ICON_PATHS = {
  search: (<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
  pin: (<><path d="M12 21s-7-5.4-7-11a7 7 0 0 1 14 0c0 5.6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.6" /></>),
  bag: (<><path d="M6.2 8h11.6l-1.1 12.2a1.8 1.8 0 0 1-1.8 1.6H9.1a1.8 1.8 0 0 1-1.8-1.6L6.2 8Z" /><path d="M9 10V7a3 3 0 0 1 6 0v3" /></>),
  flame: (<><path d="M12 3c1.8 2.2 5.5 5.3 5.5 9.5a5.5 5.5 0 0 1-11 0C6.5 8.3 10.2 5.2 12 3Z" /><path d="M12 18a3 3 0 0 0 3-3c0-1.6-1.3-2.7-3-4.5-1.7 1.8-3 2.9-3 4.5a3 3 0 0 0 3 3Z" /></>),
  plane: (<><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>),
  passport: (<><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="10" r="2.6" /><path d="M9 15.5h6" /></>),
  waves: (<><path d="M2 12.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M2 17.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></>),
  train: (<><rect x="4" y="3" width="16" height="13" rx="2.5" /><path d="M4 9.5h16M8.5 20l-1.8 2m10.6-2 1.8 2M12 16v2.5" /></>),
  car: (<><path d="M5 16l1.2-4.2A2 2 0 0 1 8.1 10h7.8a2 2 0 0 1 1.9 1.4L19 16" /><rect x="3.5" y="16" width="17" height="4" rx="1.5" /><circle cx="7.5" cy="20" r="1.4" /><circle cx="16.5" cy="20" r="1.4" /></>),
  wallet: (<><rect x="3" y="6" width="18" height="14" rx="2.5" /><path d="M3 10.5h18M15.5 15.2h2.5" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></>),
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  shield: (<><path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Z" /><path d="m9 11.5 2.2 2.2 4.3-4.2" /></>),
  users: (<><circle cx="9" cy="8.5" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 5.6a3.5 3.5 0 0 1 0 5.8M17.5 14.3a6.5 6.5 0 0 1 4 5.7" /></>),
  check: (<path d="m20 6.5-11 11-5-5" />),
  chevron: (<path d="m6 9 6 6 6-6" />),
  plus: (<path d="M12 5v14M5 12h14" />),
  arrow: (<><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>),
  ext: (<><path d="M7 17 17 7" /><path d="M9 7h8v8" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>),
};

export function Icon({ name, className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
