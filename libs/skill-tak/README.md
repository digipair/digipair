# skill-tak

This library was generated with [Nx](https://nx.dev).

It exposes TAK (Team Awareness Kit) capabilities through the
[`@tak-ps/node-tak`](https://github.com/dfpc-coe/node-tak) library:

- Enroll a client certificate from a username/password (like iTAK/ATAK do behind the scenes).
- Connect to a TAK Server streaming endpoint (TLS, port 8089) with a client certificate.
- Send CoT (Cursor on Target) messages from GeoJSON features or raw XML.
- Listen to incoming CoT messages and run PINS on each one.
- Call the TAK Server HTTP API (missions, contacts, groups, ...).

## Building

Run `nx build skill-tak` to build the library.
