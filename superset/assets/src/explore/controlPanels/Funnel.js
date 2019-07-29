/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';

/*
['pie_label_type', 'number_format'],
['donut', 'show_legend'],
['show_labels', 'labels_outside'],
['color_scheme', 'label_colors'],
*/

//add show_labels (label.enabled)
//add color options

export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['metrics'],
        ['adhoc_filters'],
        ['groupby'],
        ['row_limit'],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        ['dynamic_height', 'dynamic_slope'],
        ['fill_type', 'inverted'],
        ['min_height', 'curve_height'],
        ['bottom_pinch', 'font_size'],
        ['tooltip_enabled', 'curve_enabled'],
        ['tooltip_format'],['label_format'],
        ['color_scheme'],
      ],
    },
  ],
  controlOverrides: {
    row_limit: {
      default: 25,
    },
  },
};
