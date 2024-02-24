mergeInto(LibraryManager.library, {
  _Vibe: function (intesity) {
    for (const device of buttplug_client.devices) {
      device.vibrate(intesity/100);
    }
  },
});