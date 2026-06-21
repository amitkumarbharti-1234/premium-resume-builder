import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Trash2, Plus } from 'lucide-react';
import styles from './ArrayForm.module.css';
import { useResume } from '../../../context/ResumeContext';

const ArrayForm = ({ title, section, items, fields }) => {
  const { updateArrayItem, addArrayItem, removeArrayItem } = useResume();
  const [expandedId, setExpandedId] = useState(items[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAdd = () => {
    const newItem = fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {});
    addArrayItem(section, newItem);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>Add your {title.toLowerCase()} details</p>
      </div>

      <div className={styles.list}>
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.accordion}
            >
              <div 
                className={styles.accordionHeader} 
                onClick={() => toggleExpand(item.id)}
              >
                <div className={styles.accordionTitle}>
                  <span className={styles.indexNum}>{index + 1}</span>
                  <span className={styles.itemTitle}>
                    {item[fields[0].name] || `New ${title}`}
                  </span>
                </div>
                <div className={styles.accordionActions}>
                  <button 
                    className={styles.iconBtn} 
                    onClick={(e) => { e.stopPropagation(); removeArrayItem(section, item.id); }}
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                  {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles.accordionContent}
                  >
                    <div className={styles.formGrid}>
                      {fields.map((field) => (
                        <div key={field.name} className={`form-group ${field.type === 'textarea' ? styles.fullWidth : ''}`}>
                          <label className="form-label">{field.label}</label>
                          {field.type === 'textarea' ? (
                            <textarea
                              className="form-input"
                              value={item[field.name]}
                              onChange={(e) => updateArrayItem(section, item.id, field.name, e.target.value)}
                              rows={4}
                            />
                          ) : (
                            <input
                              type={field.type}
                              className="form-input"
                              value={item[field.name]}
                              onChange={(e) => updateArrayItem(section, item.id, field.name, e.target.value)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button className={styles.addBtn} onClick={handleAdd}>
        <Plus size={18} />
        <span>Add New {title}</span>
      </button>
    </div>
  );
};

export default ArrayForm;
