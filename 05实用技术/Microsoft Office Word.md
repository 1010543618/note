# VBA技巧

1. 某个操作不知要调用什么方法可以先录制宏然后查看宏的代码


# 图片
## 自动编号
插入-题注

## 批量修改大小
1. 在word中按alt+f11组合键，进入VBA模式
2. 在左边的工程资源管理器中找到你的word文档，在其上右键/添加/模块
3. 复制，粘贴如下代码，修改Mywidth和Myheigth为图片宽高

        Sub Macro()
        　　Mywidth=200 '图片宽度
        　　Myheigth=200 '图片高度
        　　For Each iShape In ActiveDocument.InlineShapes
            　　iShape.Height = Myheigth
            　　iShape.Width = Mywidth
        　　Next iShape
        End Sub

4. f5运行

## 批量居中
```
Sub ImageCenter()
    For Each iShape In ActiveDocument.InlineShapes
        iShape.Range.Paragraphs.Alignment = wdAlignParagraphCenter
    Next iShape
End Sub
```

# 表格
## 设置表头（第一行）和内容（其余行）样式
（推荐）添加tableBody，tableHead样式，给表头和表内容添加样式
```
Sub setTableStyle()
    For Each aTable In ActiveDocument.Tables
    
        '表内容
        aTable.Select
        With Selection
            .Style = "tableBody"
        End With
        
        '表头
        aTable.Cell(1, 1).Select
        With Selection
            .SelectRow
            .Style = "tableHead"
        End With
    Next aTable
End Sub

```

（不推荐）加粗表格第一行，直接修改样式
```
Sub BoldTablesFristRow()
    For Each aTable In ActiveDocument.Tables
        aTable.Cell(1, 1).Select
        With Selection
            .SelectRow
            For Each aCell In .Cells
                aCell.Range.Bold = True
            Next aCell
        End With
    Next aTable
End Sub
```

（不推荐）加粗表格第一行，直接修改样式，会报<无法访问此集合中单独的行，因为表格有纵向合并的单元格。>错误
```
Sub BoldTablesFristRow()
    For Each aTable In ActiveDocument.Tables
        For Each aCell In aTable.Rows.First.Cells
            aCell.Range.Bold = True
        Next aCell
    Next aTable
End Sub
```

# 段落
## 遍历全部段落正则修改内容
要先在vba的菜单上工具-引用-添加Microsoft VBScript Regular Express这个引用才能用
```
Sub add_caption()
    Dim title As String
    '正则
    Dim regExp As New regExp
    regExp.Pattern = "^图(.*)[\d ]*?(.*?)(?<!。)$"
    
    Application.ScreenUpdating = False
        For Each par In ActiveDocument.Paragraphs
            If regExp.test(par) Then
                title = "&nbsp;&nbsp;" & regExp.Replace(par, "$1")
                Selection.InsertCaption Label:="图", TitleAutoText:="", title:=title, _
                Position:=wdCaptionPositionAbove, ExcludeLabel:=0
            End If
        Next
    Application.ScreenUpdating = True
End Sub
```

## 批量修改表名格式（表名在表上方）
设置样式为"题注"
```
Sub setTableNameStyle()
    For Each aTable In ActiveDocument.Tables
        With aTable.Range
            .Collapse Direction:=wdCollapseStart
            .Move Unit:=wdParagraph, Count:=-1
            .Select
            .Style = "题注"
        End With
    Next aTable
End Sub
```

## 批量修改图片名格式（图片名在图片下方）
设置样式为"题注"
```
Sub setImageNameStyle()
    For Each iShape In ActiveDocument.InlineShapes
        With iShape.Range
            .Collapse Direction:=wdCollapseStart
            .Move Unit:=wdParagraph, Count:=1
            .Select
            .Style = "题注"
        End With
    Next iShape
End Sub
```

# 题注

## 批量添加表名题注（表名在表上方）
```
Sub setTableName()
    For Each aTable In ActiveDocument.Tables
        With aTable.Range
            .Collapse Direction:=wdCollapseStart
            .Move Unit:=wdParagraph, Count:=-1
            .Select
            .Style = "正文"
        End With
        Selection.InsertCaption Label:="表", TitleAutoText:="", title:="  ", _
        Position:=wdCaptionPositionBelow, ExcludeLabel:=0
        Selection.Text = ""
    Next aTable
End Sub
```

# 交叉引用

## 给每个表的题注添加交叉引用

写文档是经常遇到表格上面一段是表名的“题注”，再上面一段的结尾是“如表x-x”，这里的“表x-x”是”表的题注的交叉引用“，下面是一个自动添加这种交叉引用的例子：

```
Sub add_cr_of_caption()
    Dim i
    i = 1

    For Each aTable In ActiveDocument.Tables
        With aTable.Range
            .Collapse Direction:=wdCollapseStart
            '假设要添加交叉引用的位置在表格的上两段
            .Move unit:=wdParagraph, Count:=-2
            .Select
            .Style = "正文"
        End With
        Selection.EndKey unit:=wdParagraph
        Selection.InsertCrossReference ReferenceType:="表", ReferenceKind:= _
        wdOnlyLabelAndNumber, ReferenceItem:=i, InsertAsHyperlink:=True, _
        IncludePosition:=False, SeparateNumbers:=False, SeparatorString:=" "
        '结尾添加个句号
        Selection.TypeText Text:="。"
        i = i + 1
    Next aTable
End Sub
```

# 样式批量导入
样式-样式管理-导入/导出-选择两个文件-选择样式-复制

# 正则表达式
帮助-搜索"正则"

# 清除空白页眉页脚横线
选中空白页眉页脚-清除格式

# 插入带样式的代码
从别处复制

# 查看全部格式标记
设置-显示-查看全部格式标记



　　
