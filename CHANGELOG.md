# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.100.0] - 2025-01-09

### Added
- skill-codex: New Codex integration skill with events support
- skill-agent: New agent skill for AI agent management
- skill-dsp: Updated @ax-llm version integration
- Studio: First version of the new studio interface
- Output schema management in skill-common/schema
- File upload handling in skill-service
- Auto-orient feature in skill-sharp
- Output action format support
- UUID generator functionality
- Push notification improvements

### Improved
- Codex binary location handling for better performance
- Files upload management across the platform
- Editor workspace refresh functionality
- Sharp library enhancements
- Keycloak management improvements
- Schema type handling
- Vespa integration

### Fixed
- Minor fixes in Codex integration
- Editor setReasoning not refreshing codeInWorkspace issue
- Multer configuration issues
- Vespa push issues
- Removed unused code lines

### Changed
- Replaced @diegoooo/pdf2pic with pdf2pic library
- Updated output schemas structure

### Removed
- Admin portal (replaced by studio)

### Breaking Changes
- Admin portal is no longer available, users should migrate to the new studio interface

## [0.93.0-0] and Earlier

For versions 0.93.0-0 and earlier, please refer to the git history.