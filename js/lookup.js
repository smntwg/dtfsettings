(function () {
  "use strict";

  var form = document.getElementById("lookup-form");
  var result = document.getElementById("lookup-result");
  if (!form || !result || !window.DTF_SETTINGS) return;

  var data = window.DTF_SETTINGS;
  var fabricEl = document.getElementById("fabric");
  var transferEl = document.getElementById("transfer");

  function option(value, label) {
    var el = document.createElement("option");
    el.value = value;
    el.textContent = label;
    return el;
  }

  function fill(select, list, preferred) {
    select.replaceChildren();
    list.forEach(function (item) {
      select.appendChild(option(item.id, item.label));
    });
    if (preferred && list.some(function (item) { return item.id === preferred; })) {
      select.value = preferred;
    }
  }

  function findRecord(fabricId, transferId) {
    return data.records.find(function (record) {
      return record.fabric === fabricId && record.transfer === transferId;
    });
  }

  function params() {
    return new URLSearchParams(window.location.search);
  }

  function syncUrl() {
    var next = new URLSearchParams();
    next.set("fabric", fabricEl.value);
    next.set("transfer", transferEl.value);
    window.history.replaceState(null, "", window.location.pathname + "?" + next.toString());
  }

  function addStat(stats, label, valueNode) {
    var dt = document.createElement("dt");
    dt.textContent = label;
    var dd = document.createElement("dd");
    dd.appendChild(valueNode);
    stats.append(dt, dd);
  }

  function renderCard(title, item, withSource) {
    var card = document.createElement("article");
    card.className = "card";
    var heading = document.createElement("h3");
    heading.textContent = title;
    card.appendChild(heading);

    var stats = document.createElement("dl");
    stats.className = "stats";
    var temp = document.createElement("span");
    temp.append(item.tempC + "°C");
    var f = document.createElement("span");
    f.className = "temp-f";
    f.textContent = "(" + item.tempF + "°F)";
    temp.appendChild(f);
    addStat(stats, "Temperature", temp);
    ["Time", "Pressure", "Peel"].forEach(function (label) {
      var key = label.toLowerCase();
      var node = document.createElement("span");
      node.textContent = item[key];
      addStat(stats, label, node);
    });
    card.appendChild(stats);

    if (item.detail) {
      var detail = document.createElement("p");
      detail.className = "detail";
      detail.textContent = item.detail;
      card.appendChild(detail);
    }
    if (withSource && item.sourceUrl) {
      var line = document.createElement("p");
      line.className = "source-line";
      var link = document.createElement("a");
      link.href = item.sourceUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.sourceLabel || "Source";
      line.append(link);
      var extra = document.createElement("span");
      extra.className = "visually-hidden";
      extra.textContent = " (opens in a new tab)";
      line.append(extra);
      card.appendChild(line);
    }
    return card;
  }

  function render() {
    var record = findRecord(fabricEl.value, transferEl.value);
    result.replaceChildren();
    if (!record) {
      var missing = document.createElement("p");
      missing.textContent = "That combination is not in the chart yet. Follow the instructions supplied with your transfers.";
      result.appendChild(missing);
      return;
    }

    var summary = document.createElement("p");
    summary.className = "result-summary";
    summary.textContent = record.summary;
    result.appendChild(summary);

    if (record.caution) {
      var caution = document.createElement("div");
      caution.className = "caution";
      var cautionText = document.createElement("p");
      cautionText.textContent = record.caution;
      caution.appendChild(cautionText);
      result.appendChild(caution);
    }

    var cards = document.createElement("div");
    cards.className = record.example ? "cards two" : "cards";
    cards.appendChild(renderCard("Starting point", record, false));
    if (record.example) cards.appendChild(renderCard(record.example.name, record.example, true));
    result.appendChild(cards);

    var list = document.createElement("ul");
    list.className = "more-links";
    if (record.guide) {
      var guideItem = document.createElement("li");
      var guideLink = document.createElement("a");
      guideLink.href = record.guide;
      guideLink.textContent = "Read the fabric guide";
      guideItem.appendChild(guideLink);
      list.appendChild(guideItem);
    }
    (record.links || []).forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      list.appendChild(li);
    });
    result.appendChild(list);

    var reviewed = document.createElement("p");
    reviewed.className = "hint";
    reviewed.textContent = "Always follow the instructions supplied with your transfers, then test on a scrap. Figures checked " + data.reviewed + ". A press dial is often not the real platen temperature.";
    result.appendChild(reviewed);
  }

  var initial = params();
  fill(fabricEl, data.fabrics, initial.get("fabric") || "cotton");
  fill(transferEl, data.transfers, initial.get("transfer") || "cold-peel");

  fabricEl.addEventListener("change", function () {
    render();
    syncUrl();
  });
  transferEl.addEventListener("change", function () {
    render();
    syncUrl();
  });

  render();
})();
