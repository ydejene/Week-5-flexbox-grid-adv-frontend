// Sidebar collapse/expand toggle
// Adds/removes 'collapsed' class; CSS handles the visual transition

function setupToggle(toggleId, sidebarId) {
  const btn = document.getElementById(toggleId);
  const sidebar = document.getElementById(sidebarId);
  if (!btn || !sidebar) return;

  btn.addEventListener('click', function () {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    btn.setAttribute('aria-expanded', String(!isCollapsed));
    btn.textContent = isCollapsed ? 'Expand' : 'Collapse';
  });
}

setupToggle('toggle-left',  'sidebar-left');
setupToggle('toggle-right', 'sidebar-right');
