<!-- sparkle-sign-warning:
IMPORTANT: This file was signed by Sparkle. Any modifications to this file requires updating signatures in appcasts that reference this file! This will involve re-running generate_appcast or sign_update.
-->
# WTHz-D 0.1.0 Alpha 2 (build 3)

This receive-only Apple Silicon alpha brings USB FT8 reception, native spectrum views, activity, maps, a persistent logbook and diagnostic recordings into one macOS app.
The decoder and all non-system runtime dependencies are included.

## Changes since Alpha 1

- Three map modes: Stations only, Contacts and stations, and Contacts only with purple heat and selectable station dots.
- Normal-emphasis grayscale maps, separate Recent/hour fields, bounded observation footprints and saved station-dot fade choices.
- A lower map resize grip remains available when Selected station and Top 10 QSO are collapsed or hidden.
- Session-wide distance ranking in both Top 10 tabs and compact map controls.

Contact activity represents overheard exchanges, not confirmed completed QSOs.
Filled areas show smoothed observed activity, not propagation coverage or reception at every point between stations.

## Install

Requires an Apple Silicon Mac running macOS 27.0 or later.
Download the DMG, open it, drag WTHz-D into Applications and launch it from Applications.
Select the simulator for a radio-free introduction.
For USB FT8, connect the IC-705, select its USB receive source, allow Microphone access and set frequency/mode on the radio.
No command-line setup, development tools, separate WSJT-X installation or virtual audio driver is required.

## Included and limitations

- USB FT8 receive using WSJT-X 3.0.2 and optimised FFTW 3.3.10 at Normal depth.
- Traditional waterfall and Metal spectral terrain, detachable panes, saved layouts, native appearance and text-size choices.
- Station and contact activity maps based on approximate reported locator evidence.
- Top 10 QSO and Full log views, manual contacts, ADI/ADX import/export, daily Heard history and backup/recovery.
- Experimental IC-705 Wi-Fi audio/spectrum with explicit connection setup and optional local Keychain credentials.

The app cannot tune the radio, assert PTT or transmit.
Wi-Fi FT8 remains disabled; sustained Wi-Fi compatibility is unqualified and receive interruptions remain known issues.
Normal-depth weak-signal sensitivity relative to Deep has not been quantified.
FT4 operation, generic Hamlib radio support and automatic completed-QSO logging are deferred.
Closing windows keeps reception alive; Stop receiving or Command-. stops it, and relaunch never automatically starts reception.
Local data locations remain stable across updates.
Final critical validation retains a pre-existing logbook row-height test failure in both SwiftPM and arm64 Xcode; the same failure reproduces on preceding source, while all core, map and update regressions pass.
The owner accepts this known failure and the disclosed exact-build testing limits for this limited alpha release.
Exact-release physical reception, independent installation and the full manual accessibility matrix remain unverified for this limited alpha.

## Source and problem reports

The corresponding-source asset contains the exact app source, decoder/runtime source inputs and build/relocation instructions for this release.
The repository's automatic source archive alone does not include all decoder dependencies.
Notices and licence texts are also installed in the app.
Report issues at [GitHub Issues](https://github.com/mint5auce/wthz-d-releases/issues), including the app version, macOS version, Mac/radio models, connection type and reproduction steps.
Review attachments and omit credentials, private logs, station data and recordings unless separately authorised for sharing.

Publication requires the release evidence and owner's final approval recorded in the [release procedure](alpha-release-procedure.md).

## Software updates

Choose Check for Updates from the WTHz-D menu.
Daily background checks are optional, and every installation requires approval.
Stop reception or replay and allow pending saves to finish before continuing installation.
The app reopens without starting reception.
Updates use signed archives and a signed feed; system profiling is disabled.


[Complete corresponding source](https://github.com/mint5auce/wthz-d-releases/releases/download/v0.1.0-alpha.2/WTHz-D-0.1.0-alpha.2-Corresponding-Source.tar.gz).
