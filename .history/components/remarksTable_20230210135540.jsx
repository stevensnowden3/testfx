import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import EditorComponent from './EditorComponent';
import { tinykey } from '../components/dataitems';

const RemarksTable = ({ selectedSample, param, handleEditorContent }) => {
  const editorRef = useRef(null);

  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = content => {
    setEditorContent(content);
  };

  const [tinymceContent, setTinymceContent] = useState('');

  let tableHtml = '<div className="container"><table className="table table-bordered border-primary" >';
  tableHtml += '<thead><tr><th>Umeme Requirements</th><th>Comment/Remark</th></tr></thead>';
  tableHtml += '<tbody>';

  const selectedCode = selectedSample && selectedSample.code;
  switch (selectedCode) {
    case 'a':
      param.a.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'b':
      param.b.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'c':
      param.c.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'd':
      param.d.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'e':
      param.e.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'f':
      param.f.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'g':
      param.g.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'h':
      param.h.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'i':
      param.i.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'j':
      param.j.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'k':
      param.k.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'l':
      param.l.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'm':
      param.m.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'n':
      param.n.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'o':
      param.o.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'p':
      param.p.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'q':
      param.q.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'r':
      param.r.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 's':
      param.s.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 't':
      param.t.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'u':
      param.u.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'v':
      param.v.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'w':
      param.w.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'x':
      param.x.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'y':
      param.y.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'z':
      param.z.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'aa':
      param.aa.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ab':
      param.ab.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ac':
      param.ac.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ad':
      param.ad.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ae':
      param.ae.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'af':
      param.af.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ag':
      param.ag.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'af':
      param.af.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ah':
      param.ah.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ai':
      param.ai.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'aj':
      param.aj.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ak':
      param.ak.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'al':
      param.al.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'am':
      param.am.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'an':
      param.an.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ao':
      param.ao.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ap':
      param.ap.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'aq':
      param.aq.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ar':
      param.ar.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'as':
      param.as.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'at':
      param.at.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'au':
      param.au.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'av':
      param.av.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'aw':
      param.aw.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ax':
      param.ax.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ay':
      param.ay.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'az':
      param.az.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ba':
      param.ba.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bb':
      param.bb.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bc':
      param.bc.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bd':
      param.bd.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'be':
      param.be.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bf':
      param.bf.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bg':
      param.bg.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bh':
      param.bh.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bi':
      param.bi.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bj':
      param.bj.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bk':
      param.bk.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bl':
      param.bl.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bm':
      param.bm.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bn':
      param.bn.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bo':
      param.bo.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bp':
      param.bp.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bq':
      param.bq.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'br':
      param.br.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bs':
      param.bs.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bt':
      param.bt.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bu':
      param.bu.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bv':
      param.bv.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bw':
      param.bw.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bx':
      param.bx.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'by':
      param.by.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'bz':
      param.bz.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ca':
      param.ca.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cb':
      param.cb.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cc':
      param.cc.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cd':
      param.cd.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ce':
      param.ce.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cf':
      param.cf.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cg':
      param.cg.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ch':
      param.ch.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ci':
      param.ci.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cj':
      param.cj.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ck':
      param.ck.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cl':
      param.cl.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cm':
      param.cm.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'c':
      param.c.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cn':
      param.cn.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'co':
      param.co.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'c':
      param.c.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cp':
      param.cp.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cq':
      param.cq.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cr':
      param.cr.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cs':
      param.cs.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'ct':
      param.ct.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cu':
      param.cu.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cv':
      param.cv.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cv':
      param.cv.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cx':
      param.cx.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cy':
      param.cy.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'cx':
      param.cx.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'da':
      param.da.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'db':
      param.db.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dc':
      param.dc.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dd':
      param.dd.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'de':
      param.de.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'df':
      param.df.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dg':
      param.dg.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dh':
      param.dh.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'di':
      param.di.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dj':
      param.dj.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dk':
      param.dk.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dl':
      param.dl.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dm':
      param.dm.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dn':
      param.dn.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'do':
      param.do.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dp':
      param.dp.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dqr':
      param.dqr.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dr':
      param.dr.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'ds':
      param.ds.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'dt':
      param.dt.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    case 'du':
      param.du.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;

    default:
      break;
  }

  tableHtml += '</tbody></table> <h6 className="mt-3 text-"> Write a brief comment on Material(s):</h6></div> ';

  return (
    <>
      <tr>
        <td colSpan={8}>
          <span className="me-2 text-warning">
            {selectedSample && selectedSample.code === 'a' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'b' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'c' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'd' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'e' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'f' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'g' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'h' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'i' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'j' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'k' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'l' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'm' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'n' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === '0' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'p' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'q' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'r' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 's' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 't' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'u' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'v' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'w' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'x' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'w' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'z' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'aa' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ab' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ac' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ad' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ae' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'af' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ag' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ah' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ai' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'aj' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ak' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'al' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'am' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'an' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ao' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ap' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'aq' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ar' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'as' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'at' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'au' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'av' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'aw' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ax' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ay' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'az' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ba' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bb' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bc' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'be' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bf' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bg' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bh' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bi' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bj' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bk' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bl' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bm' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bn' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bo' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bp' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bq' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'br' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bs' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bt' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bu' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bv' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bw' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bx' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'by' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'bz' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ca' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cb' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cc' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cd' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ce' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cf' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cg' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ch' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ci' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cj' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ck' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cl' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cm' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cn' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'co' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cp' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cq' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cr' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cs' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'ct' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cu' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cv' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cw' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cx' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cy' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'cz' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'da' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'db' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dc' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dd' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'de' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'df' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dg' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dh' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'di' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dj' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dk' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dl' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'dl' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : (
              <>
                <p>No material item(s) selected</p>
              </>
            )}
          </span>
        </td>
      </tr>
    </>
  );
};

export default RemarksTable;
