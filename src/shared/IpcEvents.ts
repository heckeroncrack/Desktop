/*
 * SPDX-License-Identifier: GPL-3.0
 * Vencord Desktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

export const enum IpcEvents {
    GET_VENCORD_PRELOAD_FILE = "VCD_GET_VC_PRELOAD_FILE",
    GET_VENCORD_RENDERER_SCRIPT = "VCD_GET_VC_RENDERER_SCRIPT",
    GET_RENDERER_SCRIPT = "VCD_GET_RENDERER_SCRIPT",
    GET_RENDERER_CSS_FILE = "VCD_GET_RENDERER_CSS_FILE",

    RELAUNCH = "VCD_RELAUNCH",
    FOCUS = "VCD_FOCUS",

    GET_VERSION = "VCD_GET_VERSION",

    SHOW_ITEM_IN_FOLDER = "VCD_SHOW_ITEM_IN_FOLDER",
    GET_SETTINGS = "VCD_GET_SETTINGS",
    SET_SETTINGS = "VCD_SET_SETTINGS",

    SELECT_VENCORD_DIR = "VCD_SELECT_VENCORD_DIR",

    UPDATER_GET_DATA = "VCD_UPDATER_GET_DATA",
    UPDATER_DOWNLOAD = "VCD_UPDATER_DOWNLOAD",
    UPDATE_IGNORE = "VCD_UPDATE_IGNORE",

    SPELLCHECK_SET_LANGUAGES = "VCD_SPELLCHECK_SET_LANGUAGES",

    CAPTURER_GET_SOURCES = "VCD_CAPTURER_GET_SOURCES",

    CLOSE = "VCD_CLOSE"
}
