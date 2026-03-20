const STORAGE_KEYS = {
  config: "fokusplaner-config",
  plannerState: "fokusplaner-state",
};

const CONFIG_URL = "./config/default-config.json";

const DAYS = [
  { key: "mo", label: "MO" },
  { key: "di", label: "DI" },
  { key: "mi", label: "MI" },
  { key: "do", label: "DO" },
  { key: "fr", label: "FR" },
  { key: "sa", label: "SA" },
  { key: "so", label: "SO" },
];

const FALLBACK_CONFIG = {
  cycleLength: 5,
  routines: {
    morning: [
      "Waesche checken",
      "Geschirrspueler ausraeumen",
      "Bad auffrischen",
      "Lueften oben und unten",
      "Tagesaufgaben laut Plan",
    ],
    evening: [
      "Geschirrspueler einraeumen",
      "Kueche aufraeumen",
      "Arbeitsflaeche wischen",
      "Spuele sauber machen",
      "Esstisch und Kinderstuehle wischen",
      "10 Minuten Aufraeumrunde",
      "Waesche checken",
      "Sachen fuer Kindergarten rauslegen",
    ],
  },
  dayFocus: [
    { day: "Montag", topic: "Haus Reset" },
    { day: "Dienstag", topic: "Plan and Pay" },
    { day: "Mittwoch", topic: "Shopping" },
    { day: "Donnerstag", topic: "Anti-Prokrastination" },
    { day: "Freitag", topic: "Waesche" },
    { day: "Samstag", topic: "Familie" },
    { day: "Sonntag", topic: "Relay und Self Care" },
  ],
  resetTasks: [
    "Flaechen abstauben unten",
    "Flaechen abstauben oben",
    "Pflanzen giessen",
    "Boeden saugen unten",
    "Boeden saugen oben",
    "Muelleimer Kueche sauber machen",
    "Boeden wischen unten",
    "Boeden wischen oben",
    "Tueren wischen unten",
    "Tueren wischen oben",
    "Lichtschalter unten",
    "Lichtschalter oben",
  ],
  zones: [
    {
      id: "essen-flur-bad-oben",
      title: "Esszimmer, Flur, Bad oben",
      subtitle: "Zone 1",
      taskPool: [
        "Schuhe sortieren",
        "Garderobe aufraeumen",
        "Treppe saugen und wischen",
        "Fenster wischen innen Flur unten und oben",
        "Sideboard aufraeumen und wischen",
        "Spinnweben entfernen",
        "Stuehle reinigen",
        "Lampen und Stahltraeger reinigen",
        "Dusche und Abfluss reinigen",
        "Badewanne und Abfluss reinigen",
        "Toilette gruendlich reinigen",
        "Spiegel und Waschbecken reinigen",
        "Klopapier Check",
        "Fenster innen im Bad wischen",
        "Tueren und Lichtschalter reinigen",
      ],
      tasksPerWeek: 7,
    },
    {
      id: "kueche-speisekammer",
      title: "Kueche und Speisekammer",
      subtitle: "Zone 2",
      taskPool: [
        "Kuechenfronten reinigen",
        "Kuehlschrankflaechen abwischen",
        "Speisekammer sortieren",
        "Gewuerzregal ordnen",
        "Mikrowelle reinigen",
        "Backofen aussen wischen",
        "Dunstabzug reinigen",
        "Vorratsbehaelter pruefen",
        "Besteckschublade auswischen",
        "Arbeitsflaechen tief reinigen",
        "Abfalleimer desinfizieren",
        "Kaffeeecke ordnen",
      ],
      tasksPerWeek: 6,
    },
    {
      id: "wohnzimmer-buero",
      title: "Wohnzimmer und Buero",
      subtitle: "Zone 3",
      taskPool: [
        "Regale entstauben",
        "Papierstapel sortieren",
        "Sofa absaugen",
        "Spielzeugkorb ordnen",
        "Couchtisch gruendlich wischen",
        "Elektronik abstauben",
        "Kabel ordnen",
        "Fensterbank reinigen",
        "Dekoration reduzieren",
        "Arbeitsplatz zuruecksetzen",
        "Schublade mit Kleinkram sortieren",
        "Pflanzen pflegen",
      ],
      tasksPerWeek: 6,
    },
    {
      id: "schlafzimmer-kleidung",
      title: "Schlafzimmer und Kleidung",
      subtitle: "Zone 4",
      taskPool: [
        "Nachttische aufraeumen",
        "Schrankfach rotieren",
        "Kleidung aussortieren",
        "Bettkasten pruefen",
        "Spiegel reinigen",
        "Kommode wischen",
        "Waescheberg abbauen",
        "Bettwaesche wechseln",
        "Accessoires sortieren",
        "Schubladen neu falten",
        "Unter-dem-Bett Bereich reinigen",
        "Fenster innen wischen",
      ],
      tasksPerWeek: 6,
    },
    {
      id: "kinderzimmer-eingang",
      title: "Kinderzimmer und Eingang",
      subtitle: "Zone 5",
      taskPool: [
        "Buecher neu sortieren",
        "Bastelsachen ordnen",
        "Schubladen im Eingang leeren",
        "Jacken pruefen",
        "Schul und Kindergarten Sachen sortieren",
        "Erinnerungsbox aktualisieren",
        "Schuhmatten reinigen",
        "Spielbereiche resetten",
        "Puzzleteile sortieren",
        "Vorrat an Malsachen pruefen",
        "Hakenleiste abwischen",
        "Eingangstuer innen reinigen",
      ],
      tasksPerWeek: 6,
    },
  ],
  weeks: [
    {
      id: "woche-1",
      label: "Woche 1",
      mood: "Klarer Start mit Fokus auf Eingangsfluss und Badrhythmus.",
      zoneOrder: ["essen-flur-bad-oben", "kueche-speisekammer"],
      zoneOffsets: {
        "essen-flur-bad-oben": 0,
        "kueche-speisekammer": 1,
      },
    },
    {
      id: "woche-2",
      label: "Woche 2",
      mood: "Mehr Tiefe in Kueche und Wohnbereichen, andere Reihenfolge.",
      zoneOrder: ["kueche-speisekammer", "wohnzimmer-buero"],
      zoneOffsets: {
        "kueche-speisekammer": 3,
        "wohnzimmer-buero": 1,
      },
    },
    {
      id: "woche-3",
      label: "Woche 3",
      mood: "Reset fuer Kleidung, Schlafzimmer und Familienlogistik.",
      zoneOrder: ["schlafzimmer-kleidung", "kinderzimmer-eingang"],
      zoneOffsets: {
        "schlafzimmer-kleidung": 2,
        "kinderzimmer-eingang": 1,
      },
    },
    {
      id: "woche-4",
      label: "Woche 4",
      mood: "Rueckkehr zu Wohnfluss und Bad, aber mit neuer Aufgabenrotation.",
      zoneOrder: ["wohnzimmer-buero", "essen-flur-bad-oben"],
      zoneOffsets: {
        "wohnzimmer-buero": 4,
        "essen-flur-bad-oben": 5,
      },
    },
    {
      id: "woche-5",
      label: "Woche 5",
      mood: "Abschlusswoche mit Mischung aus Eingang, Kueche und Schlafbereichen.",
      zoneOrder: ["kinderzimmer-eingang", "schlafzimmer-kleidung", "kueche-speisekammer"],
      zoneOffsets: {
        "kinderzimmer-eingang": 4,
        "schlafzimmer-kleidung": 5,
        "kueche-speisekammer": 7,
      },
    },
  ],
};

const state = {
  selectedWeekId: null,
  calendarWeek: 12,
  baseConfig: structuredClone(FALLBACK_CONFIG),
  config: structuredClone(FALLBACK_CONFIG),
  configSource: "Interne Standardkonfiguration",
  zoneEditEnabled: false,
  plannerState: loadPlannerState(),
};

const elements = {
  weekSelect: document.querySelector("#weekSelect"),
  calendarWeekInput: document.querySelector("#calendarWeekInput"),
  sheetTitle: document.querySelector("#sheetTitle"),
  weekSummary: document.querySelector("#weekSummary"),
  configSourceText: document.querySelector("#configSourceText"),
  editModeStatus: document.querySelector("#editModeStatus"),
  printSummary: document.querySelector("#printSummary"),
  morningRoutine: document.querySelector("#morningRoutine"),
  eveningRoutine: document.querySelector("#eveningRoutine"),
  zonesGrid: document.querySelector("#zonesGrid"),
  dayFocusList: document.querySelector("#dayFocusList"),
  resetTaskList: document.querySelector("#resetTaskList"),
  notesInput: document.querySelector("#notesInput"),
  specialTasksInput: document.querySelector("#specialTasksInput"),
  configDialog: document.querySelector("#configDialog"),
  configEditor: document.querySelector("#configEditor"),
  configStatus: document.querySelector("#configStatus"),
  openConfigButton: document.querySelector("#openConfigButton"),
  closeConfigButton: document.querySelector("#closeConfigButton"),
  saveConfigButton: document.querySelector("#saveConfigButton"),
  resetConfigButton: document.querySelector("#resetConfigButton"),
  exportConfigButton: document.querySelector("#exportConfigButton"),
  importConfigInput: document.querySelector("#importConfigInput"),
  copyWeekButton: document.querySelector("#copyWeekButton"),
  printButton: document.querySelector("#printButton"),
  toggleEditModeTopButton: document.querySelector("#toggleEditModeTopButton"),
  toggleZoneEditButton: document.querySelector("#toggleZoneEditButton"),
  exportBackupButton: document.querySelector("#exportBackupButton"),
  importBackupButton: document.querySelector("#importBackupButton"),
  importBackupInput: document.querySelector("#importBackupInput"),
  backupStatus: document.querySelector("#backupStatus"),
  taskRowTemplate: document.querySelector("#taskRowTemplate"),
};

bootstrap().catch((error) => {
  elements.configSourceText.textContent = error.message;
});

async function bootstrap() {
  bindEvents();
  state.baseConfig = await loadBaseConfig();
  state.config = loadConfig(state.baseConfig);
  hydrateControls();
  render();
}

async function loadBaseConfig() {
  try {
    const response = await fetch(CONFIG_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Konfigurationsdatei konnte nicht geladen werden: ${response.status}`);
    }

    const parsedConfig = await response.json();
    const mergedBaseConfig = mergeConfigs(FALLBACK_CONFIG, parsedConfig);
    validateConfig(mergedBaseConfig);
    state.configSource = `Team-Vorlage aus ${CONFIG_URL}`;
    return mergedBaseConfig;
  } catch {
    state.configSource = "Fallback-Vorlage aus der App";
    return structuredClone(FALLBACK_CONFIG);
  }
}

function loadConfig(baseConfig) {
  const rawConfig = localStorage.getItem(STORAGE_KEYS.config);

  if (!rawConfig) {
    return structuredClone(baseConfig);
  }

  try {
    const mergedConfig = mergeConfigs(baseConfig, JSON.parse(rawConfig));
    validateConfig(mergedConfig);
    return mergedConfig;
  } catch {
    return structuredClone(baseConfig);
  }
}

function loadPlannerState() {
  const rawState = localStorage.getItem(STORAGE_KEYS.plannerState);

  if (!rawState) {
    return {};
  }

  try {
    return JSON.parse(rawState);
  } catch {
    return {};
  }
}

function mergeConfigs(baseConfig, candidate = {}) {
  const base = structuredClone(baseConfig);

  return {
    ...base,
    ...candidate,
    routines: {
      ...base.routines,
      ...(candidate.routines ?? {}),
    },
    zones: Array.isArray(candidate.zones) ? candidate.zones : base.zones,
    weeks: Array.isArray(candidate.weeks) ? candidate.weeks : base.weeks,
    dayFocus: Array.isArray(candidate.dayFocus) ? candidate.dayFocus : base.dayFocus,
    resetTasks: Array.isArray(candidate.resetTasks)
      ? candidate.resetTasks
      : base.resetTasks,
  };
}

function hydrateControls() {
  state.selectedWeekId = state.selectedWeekId ?? state.config.weeks[0]?.id ?? null;
  elements.calendarWeekInput.value = String(state.calendarWeek);
  renderWeekSelect();
  syncConfigEditor();
}

function bindEvents() {
  elements.weekSelect.addEventListener("change", (event) => {
    state.selectedWeekId = event.target.value;
    render();
  });

  elements.calendarWeekInput.addEventListener("change", (event) => {
    state.calendarWeek = clampWeek(event.target.value);
    elements.calendarWeekInput.value = String(state.calendarWeek);
    render();
  });

  elements.printButton.addEventListener("click", () => {
    window.print();
  });

  elements.exportBackupButton.addEventListener("click", () => {
    exportFullBackup();
  });

  elements.importBackupButton.addEventListener("click", () => {
    elements.importBackupInput.click();
  });

  elements.importBackupInput.addEventListener("change", async (event) => {
    const [file] = event.target.files ?? [];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      importFullBackup(JSON.parse(text));
      setBackupStatus("Backup erfolgreich importiert.");
    } catch (error) {
      setBackupStatus(error.message);
    } finally {
      event.target.value = "";
    }
  });

  getEditModeButtons().forEach((button) => {
    button.addEventListener("click", () => {
      state.zoneEditEnabled = !state.zoneEditEnabled;
      render();
    });
  });

  elements.notesInput.addEventListener("input", () => {
    updateWeekState({ notes: elements.notesInput.value });
  });

  elements.specialTasksInput.addEventListener("input", () => {
    updateWeekState({ specialTasks: elements.specialTasksInput.value });
  });

  elements.openConfigButton.addEventListener("click", () => {
    syncConfigEditor();
    elements.configStatus.textContent = "";
    elements.configDialog.showModal();
  });

  elements.saveConfigButton.addEventListener("click", () => {
    try {
      const parsedConfig = JSON.parse(elements.configEditor.value);
      const mergedConfig = mergeConfigs(state.baseConfig, parsedConfig);
      validateConfig(mergedConfig);
      state.config = mergedConfig;
      persistConfig();
      renderWeekSelect();
      if (!state.config.weeks.some((week) => week.id === state.selectedWeekId)) {
        state.selectedWeekId = state.config.weeks[0]?.id ?? null;
      }
      syncConfigEditor();
      render();
      elements.configStatus.textContent = "Konfiguration gespeichert.";
    } catch (error) {
      elements.configStatus.textContent = error.message;
    }
  });

  elements.resetConfigButton.addEventListener("click", () => {
    state.config = structuredClone(state.baseConfig);
    localStorage.removeItem(STORAGE_KEYS.config);
    renderWeekSelect();
    state.selectedWeekId = state.config.weeks[0]?.id ?? null;
    syncConfigEditor();
    render();
    elements.configStatus.textContent = "Repo-Standardkonfiguration wiederhergestellt.";
  });

  elements.exportConfigButton.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.config, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "fokusplaner-konfiguration.json";
    anchor.click();
    URL.revokeObjectURL(url);
    elements.configStatus.textContent = "JSON exportiert.";
  });

  elements.importConfigInput.addEventListener("change", async (event) => {
    const [file] = event.target.files ?? [];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const mergedConfig = mergeConfigs(state.baseConfig, parsed);
      validateConfig(mergedConfig);
      state.config = mergedConfig;
      persistConfig();
      renderWeekSelect();
      state.selectedWeekId = state.config.weeks[0]?.id ?? null;
      syncConfigEditor();
      render();
      elements.configStatus.textContent = "Konfiguration importiert.";
    } catch (error) {
      elements.configStatus.textContent = error.message;
    } finally {
      event.target.value = "";
    }
  });

  elements.copyWeekButton.addEventListener("click", () => {
    const nextWeekNumber = state.config.weeks.length + 1;
    const zoneOrder = state.config.zones.map((zone) => zone.id);
    const zoneTaskMap = Object.fromEntries(zoneOrder.map((zoneId) => [zoneId, []]));

    const newWeek = {
      id: `woche-${Date.now()}`,
      label: `Woche ${nextWeekNumber}`,
      mood: "",
      zoneOrder,
      zoneOffsets: {},
      zoneTaskMap,
    };

    state.config.weeks.push(newWeek);
    persistConfig();
    renderWeekSelect();
    state.selectedWeekId = newWeek.id;
    syncConfigEditor();
    render();
    elements.configStatus.textContent = "Neue Woche mit leeren Zonen angelegt.";
  });
}

function render() {
  const week = getSelectedWeek();
  if (!week) {
    return;
  }

  getEditModeButtons().forEach((button) => {
    button.textContent = state.zoneEditEnabled
      ? "Wochenfelder sperren"
      : "Wochenfelder bearbeiten";
    button.classList.toggle("is-active", state.zoneEditEnabled);
  });

  elements.editModeStatus.textContent = state.zoneEditEnabled
    ? "Bearbeitungsmodus: AKTIV"
    : "Bearbeitungsmodus: AUS";

  syncHeaderMeta(week);
  elements.weekSelect.value = week.id;
  elements.sheetTitle.textContent = `${week.label} · KW ${state.calendarWeek}`;
  elements.weekSummary.textContent = week.mood ?? "";

  const weekState = getWeekState();
  elements.notesInput.value = weekState.notes ?? "";
  elements.specialTasksInput.value = weekState.specialTasks ?? "";

  renderRoutine(elements.morningRoutine, state.config.routines.morning, "morning");
  renderRoutine(elements.eveningRoutine, state.config.routines.evening, "evening");
  renderZones(week);
  renderDayFocus();
  renderResetTasks();
}

function renderWeekSelect() {
  elements.weekSelect.innerHTML = "";

  state.config.weeks.forEach((week, index) => {
    const option = document.createElement("option");
    option.value = week.id;
    option.textContent = `${index + 1}. ${week.label}`;
    elements.weekSelect.append(option);
  });
}

function renderRoutine(target, tasks, routineKey) {
  target.innerHTML = "";

  tasks.forEach((taskLabel, taskIndex) => {
    const row = createTaskRow({
      label: taskLabel,
      checkedMap: getWeekState().routineChecks?.[routineKey]?.[taskIndex],
      onToggle(dayKey, checked) {
        const weekState = getWeekState();
        weekState.routineChecks ??= {};
        weekState.routineChecks[routineKey] ??= {};
        weekState.routineChecks[routineKey][taskIndex] ??= {};
        weekState.routineChecks[routineKey][taskIndex][dayKey] = checked;
        persistPlannerState();
      },
    });
    target.append(row);
  });

  const hostCard = target.closest(".routine-card");
  if (!hostCard) {
    return;
  }

  if (!state.zoneEditEnabled) {
    removeSectionEditor(hostCard);
    return;
  }

  const title = routineKey === "morning" ? "Morgenroutine bearbeiten" : "Abendroutine bearbeiten";
  const editor = createSimpleListEditor({
    title,
    placeholder: "Aufgabe hinzufuegen ...",
    helpText: "Aenderungen gelten fuer die Konfiguration.",
    items: tasks,
    onAdd(value) {
      state.config.routines[routineKey].push(value);
      persistConfig();
      syncConfigEditor();
      render();
    },
    onRemove(index) {
      state.config.routines[routineKey].splice(index, 1);
      persistConfig();
      syncConfigEditor();
      render();
    },
  });

  setSectionEditor(hostCard, editor);
}

function renderZones(week) {
  elements.zonesGrid.innerHTML = "";
  const weekState = getWeekState();
  const taskSuggestions = getAllTaskSuggestions();

  week.zoneOrder.forEach((zoneId, zoneIndex) => {
    const zone = state.config.zones.find((entry) => entry.id === zoneId);
    if (!zone) {
      return;
    }

    const article = document.createElement("article");
    article.className = "zone-card";

    const title = document.createElement("h3");
    title.textContent = zone.title;

    const meta = document.createElement("p");
    meta.className = "zone-meta";
    meta.textContent = `${zone.subtitle ?? `Zone ${zoneIndex + 1}`} · Aufgaben fuer diese Woche separat speicherbar`;

    const list = document.createElement("div");
    list.className = "zone-task-list";
    const weekZoneTasks = getWeekZoneTasks(week, zone, zoneIndex);

    if (weekZoneTasks.length === 0) {
      const emptyHint = document.createElement("p");
      emptyHint.className = "zone-empty-state";
      emptyHint.textContent = "Diese Zone ist in dieser Woche noch leer.";
      list.append(emptyHint);
    }

    weekZoneTasks.forEach((task, taskIndex) => {
      const rawZoneCheck = weekState.zoneChecks?.[zone.id]?.[task];
      const zoneChecked = typeof rawZoneCheck === "boolean"
        ? rawZoneCheck
        : Object.values(rawZoneCheck ?? {}).some(Boolean);

      const row = createTaskRow({
        label: task,
        prefix: String(taskIndex + 1).padStart(2, "0"),
        checkedMap: { single: zoneChecked },
        checkboxMode: "single",
        onToggle(_ignored, checked) {
          const currentWeekState = getWeekState();
          currentWeekState.zoneChecks ??= {};
          currentWeekState.zoneChecks[zone.id] ??= {};
          currentWeekState.zoneChecks[zone.id][task] = checked;
          persistPlannerState();
        },
      });
      row.classList.add("zone-task-row");
      list.append(row);
    });

    if (state.zoneEditEnabled) {
      const editor = createZoneEditor({ week, zone, zoneIndex, suggestions: taskSuggestions });
      article.append(title, meta, list, editor);
    } else {
      article.append(title, meta, list);
    }
    elements.zonesGrid.append(article);
  });
}

function createZoneEditor({ week, zone, zoneIndex, suggestions }) {
  const editor = document.createElement("div");
  editor.className = "zone-editor";

  const title = document.createElement("p");
  title.className = "zone-editor-title";
  title.textContent = "Zone fuer diese Woche bearbeiten";

  const datalistId = `suggestions-${week.id}-${zone.id}`;

  const inputRow = document.createElement("div");
  inputRow.className = "zone-editor-input-row";

  const input = document.createElement("input");
  input.className = "zone-editor-input";
  input.type = "text";
  input.placeholder = "Aufgabe hinzufuegen ...";
  input.setAttribute("list", datalistId);

  const datalist = document.createElement("datalist");
  datalist.id = datalistId;

  suggestions.forEach((task) => {
    const option = document.createElement("option");
    option.value = task;
    datalist.append(option);
  });

  const addButton = document.createElement("button");
  addButton.className = "secondary-button zone-editor-add";
  addButton.type = "button";
  addButton.textContent = "Hinzufuegen";
  addButton.addEventListener("click", () => {
    const nextTask = normalizeTaskLabel(input.value);
    if (!nextTask) {
      return;
    }
    addTaskToWeekZone(week, zone, zoneIndex, nextTask);
    input.value = "";
  });

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    addButton.click();
  });

  inputRow.append(input, addButton);

  const selectedTasks = document.createElement("div");
  selectedTasks.className = "zone-chip-list";

  getWeekZoneTasks(week, zone, zoneIndex).forEach((task) => {
    const chip = document.createElement("span");
    chip.className = "zone-chip";
    const text = document.createElement("span");
    text.textContent = task;
    const removeButton = document.createElement("button");
    removeButton.className = "zone-chip-remove";
    removeButton.type = "button";
    removeButton.textContent = "x";
    removeButton.title = "Aufgabe aus dieser Woche entfernen";
    removeButton.addEventListener("click", () => {
      removeTaskFromWeekZone(week, zone, zoneIndex, task);
    });
    chip.append(text, removeButton);
    selectedTasks.append(chip);
  });

  const help = document.createElement("p");
  help.className = "zone-editor-help";
  help.textContent = "Vorschlaege enthalten Aufgaben aus allen Zonen und Wochen.";

  editor.append(title, inputRow, datalist, selectedTasks, help);
  return editor;
}

function getWeekZoneTasks(week, zone, zoneIndex = 0) {
  const configuredTasks = week.zoneTaskMap?.[zone.id];
  if (Array.isArray(configuredTasks)) {
    return configuredTasks;
  }

  return generateZoneTasks(zone, week, zoneIndex);
}

function addTaskToWeekZone(week, zone, zoneIndex, taskLabel) {
  if (!Array.isArray(week.zoneTaskMap?.[zone.id])) {
    week.zoneTaskMap ??= {};
    week.zoneTaskMap[zone.id] = getWeekZoneTasks(week, zone, zoneIndex);
  }

  if (week.zoneTaskMap[zone.id].includes(taskLabel)) {
    return;
  }

  week.zoneTaskMap[zone.id].push(taskLabel);
  persistConfig();
  syncConfigEditor();
  render();
}

function removeTaskFromWeekZone(week, zone, zoneIndex, taskLabel) {
  if (!Array.isArray(week.zoneTaskMap?.[zone.id])) {
    week.zoneTaskMap ??= {};
    week.zoneTaskMap[zone.id] = getWeekZoneTasks(week, zone, zoneIndex);
  }

  if (!Array.isArray(week.zoneTaskMap?.[zone.id])) {
    return;
  }

  week.zoneTaskMap[zone.id] = week.zoneTaskMap[zone.id].filter((entry) => entry !== taskLabel);

  if (state.plannerState[week.id]?.zoneChecks?.[zone.id]?.[taskLabel] !== undefined) {
    delete state.plannerState[week.id].zoneChecks[zone.id][taskLabel];
    persistPlannerState();
  }

  persistConfig();
  syncConfigEditor();
  render();
}

function getAllTaskSuggestions() {
  const suggestions = new Set();

  state.config.zones.forEach((zone) => {
    zone.taskPool.forEach((task) => {
      suggestions.add(task);
    });
  });

  state.config.weeks.forEach((week) => {
    Object.values(week.zoneTaskMap ?? {}).forEach((tasks) => {
      (tasks ?? []).forEach((task) => {
        suggestions.add(task);
      });
    });
  });

  return Array.from(suggestions).sort((left, right) => left.localeCompare(right, "de"));
}

function normalizeTaskLabel(value) {
  const compact = value.replace(/\s+/g, " ").trim();
  return compact;
}

function renderDayFocus() {
  elements.dayFocusList.innerHTML = "";

  state.config.dayFocus.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "focus-item";
    const day = document.createElement("span");
    day.className = "focus-day";
    day.textContent = entry.day;
    const topic = document.createElement("span");
    topic.className = "focus-topic";
    topic.textContent = entry.topic;
    row.append(day, topic);
    elements.dayFocusList.append(row);
  });

  const hostPanel = elements.dayFocusList.closest(".focus-panel");
  if (!hostPanel) {
    return;
  }

  if (!state.zoneEditEnabled) {
    removeSectionEditor(hostPanel);
    return;
  }

  setSectionEditor(hostPanel, createDayFocusEditor());
}

function renderResetTasks() {
  elements.resetTaskList.innerHTML = "";
  const weekState = getWeekState();

  state.config.resetTasks.forEach((taskLabel, taskIndex) => {
    const row = document.createElement("div");
    row.className = "reset-item";
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(weekState.resetChecks?.[taskIndex]);
    input.addEventListener("change", () => {
      const innerState = getWeekState();
      innerState.resetChecks ??= {};
      innerState.resetChecks[taskIndex] = input.checked;
      persistPlannerState();
    });
    const span = document.createElement("span");
    span.textContent = taskLabel;
    label.append(input, span);
    row.append(label);
    elements.resetTaskList.append(row);
  });

  const hostPanel = elements.resetTaskList.closest(".reset-panel");
  if (!hostPanel) {
    return;
  }

  if (!state.zoneEditEnabled) {
    removeSectionEditor(hostPanel);
    return;
  }

  const editor = createSimpleListEditor({
    title: "Haus-Reset bearbeiten",
    placeholder: "Reset-Aufgabe hinzufuegen ...",
    helpText: "Aenderungen gelten fuer die Konfiguration.",
    items: state.config.resetTasks,
    onAdd(value) {
      state.config.resetTasks.push(value);
      persistConfig();
      syncConfigEditor();
      render();
    },
    onRemove(index) {
      state.config.resetTasks.splice(index, 1);
      persistConfig();
      syncConfigEditor();
      render();
    },
  });

  setSectionEditor(hostPanel, editor);
}

function createDayFocusEditor() {
  const container = document.createElement("div");
  container.className = "section-editor";

  const title = document.createElement("p");
  title.className = "section-editor-title";
  title.textContent = "Wochenthemen bearbeiten";

  const inputRow = document.createElement("div");
  inputRow.className = "section-editor-grid";

  const dayInput = document.createElement("input");
  dayInput.type = "text";
  dayInput.className = "section-editor-input";
  dayInput.placeholder = "Tag";

  const topicInput = document.createElement("input");
  topicInput.type = "text";
  topicInput.className = "section-editor-input";
  topicInput.placeholder = "Thema";

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "secondary-button section-editor-add";
  addButton.textContent = "Hinzufuegen";
  addButton.addEventListener("click", () => {
    const day = normalizeTaskLabel(dayInput.value);
    const topic = normalizeTaskLabel(topicInput.value);
    if (!day || !topic) {
      return;
    }

    state.config.dayFocus.push({ day, topic });
    dayInput.value = "";
    topicInput.value = "";
    persistConfig();
    syncConfigEditor();
    render();
  });

  inputRow.append(dayInput, topicInput, addButton);

  const chipList = document.createElement("div");
  chipList.className = "section-chip-list";

  state.config.dayFocus.forEach((entry, index) => {
    const chip = document.createElement("span");
    chip.className = "section-chip";
    const text = document.createElement("span");
    text.textContent = `${entry.day}: ${entry.topic}`;
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "section-chip-remove";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => {
      state.config.dayFocus.splice(index, 1);
      persistConfig();
      syncConfigEditor();
      render();
    });
    chip.append(text, removeButton);
    chipList.append(chip);
  });

  const help = document.createElement("p");
  help.className = "section-editor-help";
  help.textContent = "Aenderungen gelten fuer die Konfiguration.";

  container.append(title, inputRow, chipList, help);
  return container;
}

function createSimpleListEditor({ title, placeholder, helpText, items, onAdd, onRemove }) {
  const container = document.createElement("div");
  container.className = "section-editor";

  const heading = document.createElement("p");
  heading.className = "section-editor-title";
  heading.textContent = title;

  const inputRow = document.createElement("div");
  inputRow.className = "section-editor-grid section-editor-grid-simple";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "section-editor-input";
  input.placeholder = placeholder;

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "secondary-button section-editor-add";
  addButton.textContent = "Hinzufuegen";
  addButton.addEventListener("click", () => {
    const value = normalizeTaskLabel(input.value);
    if (!value) {
      return;
    }
    onAdd(value);
    input.value = "";
  });

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    addButton.click();
  });

  inputRow.append(input, addButton);

  const chipList = document.createElement("div");
  chipList.className = "section-chip-list";

  items.forEach((entry, index) => {
    const chip = document.createElement("span");
    chip.className = "section-chip";
    const text = document.createElement("span");
    text.textContent = entry;
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "section-chip-remove";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => {
      onRemove(index);
    });
    chip.append(text, removeButton);
    chipList.append(chip);
  });

  const help = document.createElement("p");
  help.className = "section-editor-help";
  help.textContent = helpText;

  container.append(heading, inputRow, chipList, help);
  return container;
}

function setSectionEditor(host, editor) {
  removeSectionEditor(host);
  host.append(editor);
}

function removeSectionEditor(host) {
  const currentEditor = host.querySelector(".section-editor");
  if (currentEditor) {
    currentEditor.remove();
  }
}

function getEditModeButtons() {
  return [elements.toggleEditModeTopButton, elements.toggleZoneEditButton].filter(Boolean);
}

function createTaskRow({ label, prefix = "", checkedMap, onToggle, checkboxMode = "days" }) {
  const row = elements.taskRowTemplate.content.firstElementChild.cloneNode(true);
  const prefixElement = row.querySelector(".task-prefix");
  const labelElement = row.querySelector(".task-label");
  const checkboxContainer = row.querySelector(".weekday-checkboxes");

  if (prefix) {
    prefixElement.textContent = prefix;
    prefixElement.classList.add("zone-task-order");
  } else {
    prefixElement.remove();
  }

  labelElement.textContent = label;

  if (checkboxMode === "single") {
    createSingleCheckbox(checkboxContainer, Boolean(checkedMap?.single), (checked) => {
      onToggle("single", checked);
    });
  } else {
    createDayCheckboxes(checkboxContainer, checkedMap, onToggle);
  }

  return row;
}

function createSingleCheckbox(container, checked, onToggle) {
  const wrapper = document.createElement("label");
  wrapper.className = "single-checkbox";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.addEventListener("change", () => {
    onToggle(input.checked);
  });
  wrapper.append(input);
  container.append(wrapper);
}

function createDayCheckboxes(container, checkedMap, onToggle) {
  DAYS.forEach((day) => {
    const badge = document.createElement("label");
    badge.className = "day-badge";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(checkedMap?.[day.key]);
    input.addEventListener("change", () => {
      onToggle(day.key, input.checked);
    });
    const label = document.createElement("span");
    label.textContent = day.label;
    badge.append(input, label);
    container.append(badge);
  });
}

function generateZoneTasks(zone, week, zoneIndex) {
  const pool = Array.isArray(zone.taskPool) ? zone.taskPool : [];
  if (!pool.length) {
    return [];
  }

  const offset = (week.zoneOffsets?.[zone.id] ?? 0) + zoneIndex + state.calendarWeek;
  const rotated = rotate(pool, offset % pool.length);
  const alternated = offset % 2 === 0 ? rotated : interleave(rotated);
  const amount = Math.min(zone.tasksPerWeek ?? alternated.length, alternated.length);
  return alternated.slice(0, amount);
}

function rotate(items, offset) {
  return items.map((_, index) => items[(index + offset) % items.length]);
}

function interleave(items) {
  const output = [];
  let left = 0;
  let right = items.length - 1;

  while (left <= right) {
    output.push(items[left]);
    if (left !== right) {
      output.push(items[right]);
    }
    left += 1;
    right -= 1;
  }

  return output;
}

function getSelectedWeek() {
  return state.config.weeks.find((week) => week.id === state.selectedWeekId) ?? state.config.weeks[0] ?? null;
}

function getWeekState() {
  const week = getSelectedWeek();
  if (!week) {
    return {};
  }

  state.plannerState[week.id] ??= {};
  return state.plannerState[week.id];
}

function updateWeekState(patch) {
  Object.assign(getWeekState(), patch);
  persistPlannerState();
}

function persistConfig() {
  localStorage.setItem(STORAGE_KEYS.config, JSON.stringify(state.config));
}

function persistPlannerState() {
  localStorage.setItem(STORAGE_KEYS.plannerState, JSON.stringify(state.plannerState));
}

function syncConfigEditor() {
  elements.configEditor.value = JSON.stringify(state.config, null, 2);
}

function syncHeaderMeta(week) {
  const weekNumber = state.config.weeks.findIndex((entry) => entry.id === week.id) + 1;
  elements.configSourceText.textContent = `${state.configSource} · Lokale Aenderungen ueberschreiben die Vorlage nur in diesem Browser.`;
  elements.printSummary.textContent = `Zykluswoche ${weekNumber}/${state.config.weeks.length} · Kalenderwoche ${state.calendarWeek}`;
}

function exportFullBackup() {
  const payload = {
    backupVersion: 1,
    app: "FokusPlanerHaushalt",
    exportedAt: new Date().toISOString(),
    selectedWeekId: state.selectedWeekId,
    calendarWeek: state.calendarWeek,
    config: state.config,
    plannerState: state.plannerState,
  };

  const datePart = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `fokusplaner-backup-${datePart}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  setBackupStatus("Backup exportiert.");
}

function importFullBackup(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("Backup ist ungueltig.");
  }

  const importedConfig = payload.config ?? payload;
  const mergedConfig = mergeConfigs(state.baseConfig, importedConfig);
  validateConfig(mergedConfig);

  state.config = mergedConfig;
  state.plannerState = isObject(payload.plannerState) ? payload.plannerState : {};

  if (payload.calendarWeek !== undefined) {
    state.calendarWeek = clampWeek(payload.calendarWeek);
    elements.calendarWeekInput.value = String(state.calendarWeek);
  }

  state.selectedWeekId = payload.selectedWeekId;
  if (!state.config.weeks.some((week) => week.id === state.selectedWeekId)) {
    state.selectedWeekId = state.config.weeks[0]?.id ?? null;
  }

  persistConfig();
  persistPlannerState();
  renderWeekSelect();
  syncConfigEditor();
  render();
}

function setBackupStatus(message) {
  elements.backupStatus.textContent = message;
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function clampWeek(input) {
  const number = Number.parseInt(input, 10);
  if (Number.isNaN(number)) {
    return 1;
  }

  return Math.max(1, Math.min(53, number));
}

function validateConfig(config) {
  if (!Array.isArray(config.weeks) || config.weeks.length === 0) {
    throw new Error("Die Konfiguration braucht mindestens eine Woche.");
  }

  if (!Array.isArray(config.zones) || config.zones.length === 0) {
    throw new Error("Die Konfiguration braucht mindestens eine Zone.");
  }

  const zoneIds = new Set(config.zones.map((zone) => zone.id));

  config.zones.forEach((zone, index) => {
    if (!zone.id || !zone.title) {
      throw new Error(`Zone ${index + 1} braucht id und title.`);
    }
    if (!Array.isArray(zone.taskPool) || zone.taskPool.length === 0) {
      throw new Error(`Zone ${zone.title} braucht einen taskPool mit Aufgaben.`);
    }
  });

  config.weeks.forEach((week, index) => {
    if (!week.id || !week.label) {
      throw new Error(`Woche ${index + 1} braucht id und label.`);
    }
    if (!Array.isArray(week.zoneOrder) || week.zoneOrder.length === 0) {
      throw new Error(`Woche ${week.label} braucht mindestens eine Zone in zoneOrder.`);
    }

    week.zoneOrder.forEach((zoneId) => {
      if (!zoneIds.has(zoneId)) {
        throw new Error(`Woche ${week.label} referenziert unbekannte Zone ${zoneId}.`);
      }
    });
  });
}
