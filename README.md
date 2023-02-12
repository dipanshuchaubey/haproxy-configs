# HAProxy Sample Configuration Files

This repository contains sample configuration files for HAProxy. The files are intended to be used as a reference for configuring HAProxy. They are not intended to be used in production without modification.

---

### Contents

1. [Introduction](#introduction)
2. [Sample Configuration Files](#sample-configuration-files)
3. [Sample Node Application](#sample-node-application)
4. [License](#license)

---

### Introduction

HAProxy is a free, very fast and reliable solution offering high availability, load balancing, and proxying for TCP and HTTP-based applications. It is particularly suited for very high traffic web sites and powers quite a number of the world's most visited ones.

HAProxy is written in C and has a reputation for being fast and efficient in terms of processor and memory usage. It is particularly suited for very high traffic web sites and powers quite a number of the world's most visited ones.

---

### Sample Node Application

The sample Node application is a simple Node application. The application is intended to be used as a backend for the sample configuration files. Multiple instances of the application can be run to simulate multiple backend servers using Docker. A Dockerfile is included in the repository.

---

### Sample Configuration Files

The sample configuration files are organized by the following categories:

1. [Basic](basic)
2. [Advanced](advanced)
3. [Advanced SSL](advanced-ssl)
4. [Advanced TCP](advanced-tcp)
5. [Advanced WebSockets](advanced-websockets)
6. [Advanced WebSockets SSL](advanced-websockets-ssl)
7. [Advanced WebSockets TCP](advanced-websockets-tcp)
8. [Advanced WebSockets TCP SSL](advanced-websockets-tcp-ssl)

---

### License

The sample configuration files are licensed under the [MIT License](LICENSE).
